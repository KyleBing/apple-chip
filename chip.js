/*****************************
 Create Date: 20200605175639
 Update Date: 20210904091940
 *****************************/

const dateLastEdit = '2024.11.09' // 2023.03.30

const latestOS = '最新'

const contributors = [
   'KyleBing','Zgc.Seven','皇家电脑','金东焕（麒麟，嗯就这名）','辉','梁育铭','Meipo','wrj1215', 'Kirin КуaкmБaпрасзenвын','Jiawen Geng',
    'MPFB'
]

// Initialize data loader and chip arrays
let chipsA = []
let chipsS = []
let chipsM = []

// Load chip data from JSON files
async function loadChipData() {
    try {
        const dataLoader = new ChipDataLoader();
        await dataLoader.loadAllChipData();
        
        // Get chip data from the data loader
        chipsA = dataLoader.getChipData('A')
        chipsS = dataLoader.getChipData('S')
        chipsM = dataLoader.getChipData('M')
        
        // Initialize Vue app after data is loaded
        initVueApp();
    } catch (error) {
        console.error('Error loading chip data:', error);
        // Initialize Vue app with empty arrays if loading fails
        initVueApp();
    }
}

function initVueApp() {
let app = new Vue({
   el: '#app',
   computed: {
      portraitMode(){
         return window.innerWidth > window.innerHeight
      },
      isInMobileMode(){
         return /Mobile/i.test(navigator.userAgent)
      },
      isInChromeCore(){
         return /Chrome/i.test(navigator.userAgent)
      },
      isShowFullScreenBtn(){
         return this.isInChromeCore && !this.isInMobileMode
      }
   },
   data: {
      // date
      dateEnd: dateLastEdit,
      // thumb up
      pingPongInterval: null,
      thumbsUpKey: 'apple-chip',
      heartActive: false,
      thumbsUpCount: 0,

      // full screen 相关
      didEnteredFullScreen: false,

      model: 'A',

      // 浏览器参数
      heightApp: 0,
      chips: chipsA
   },
   mounted(){
      // 全屏相关
      this.relocate() // relocate items
      this.websocketInit()
      this.getInitThumbsUpCount()
   },

   watch: {
      model() {
         switch (this.model) {
                    case 'A': this.chips = chipsA; break;
                    case 'S': this.chips = chipsS; break;
                    case 'M': this.chips = chipsM; break;
         }
         this.relocate()
      }
   },
   methods: {
      // 全屏显示
      enterFullScreen(){
         document.documentElement.requestFullscreen().then()
      },
      switchModels(model){
         this.model = model
      },
      relocate() {
         this.heightApp = 0
         this.$nextTick(() => {
            let heightChip = document.querySelector('.chip').offsetHeight + 40
            console.log(heightChip)
            if (heightChip < innerHeight) { // .card 高度小于屏幕高度时
               document.querySelector('.card-container').style.position = 'fixed'
               this.heightApp = innerHeight

               // Mobile
               if (this.isInMobileMode) {
                  window.onscroll = null
               } else { // PC
                  let scrollFull = 200 * this.chips.length;
                  let heightPage = scrollFull + innerHeight; // 计算可滚动长度
                  document.querySelector('body').style.height = heightPage + 'px';
                  window.onscroll = () => {
                     let scrollTop = document.documentElement.scrollTop; // 文档上卷的高度
                     let container = document.querySelector('.card-container');
                     let scrollSpace = container.scrollWidth - window.innerWidth; // 横向滚动范围
                     let scrollLeft = (scrollTop / scrollFull) * scrollSpace
                     container.scrollTo(scrollLeft, 0);
                  }
               }
            } else {
               document.querySelector('body').style.height = 'auto'
               document.querySelector('.card-container').style.position = 'relative'
               window.onscroll = null

            }
         })
      },
      // 点赞功能
      getInitThumbsUpCount(){
         axios
             .get('../../portal/thumbs-up?key=' + this.thumbsUpKey)
             .then(res => {
                if (res.data && res.data.data){
                   this.thumbsUpCount = res.data.data
                }
             })
      },
      websocketInit(){
         this.websocket = new WebSocket('ws://kylebing.cn/ws')
         this.websocket.onopen = this.websocketOnOpen
         this.websocket.onmessage = this.websocketOnMessage
         this.websocket.onerror = this.websocketOnError
         this.websocket.onclose = this.websocketClose
      },
      websocketOnOpen() {
         this.portStatus = 'success'
         this.pingPongInterval = setInterval(()=>{
            if (this.websocket){
               switch (this.websocket.readyState){
                  case 0: // connecting
                     break;
                  case 1: // open
                     let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                     this.websocket.send(JSON.stringify(message))
                     break;
                  case 2:  // closing
                     clearInterval(this.pingPongInterval)
                     break;
                  case 3: // closed
                     clearInterval(this.pingPongInterval)
                     break;
               }
            }
         }, 10000)
      },
      websocketOnMessage(res) {
         let receivedMessage = JSON.parse(res.data)
         switch (receivedMessage.type){
            case WSMessage.type.heartBeat:
               break;
            case WSMessage.type.thumbsUp:
               if (receivedMessage.content.key === this.thumbsUpKey){
                  this.thumbsUpCount = receivedMessage.content.count
               }
               break;
         }
      },
      websocketOnError() {
         this.portStatus = 'error'
         this.websocket.send('on error')
      },
      websocketClose() {
         this.portStatus = 'closed'
         console.log('socket has closed')
      },
      thumbsUp(){
         this.sendMessage(this.thumbsUpKey)
      },
      sendMessage(key){
         if (this.websocket) {
            this.heartActive = true
            let message = new WSMessage(WSMessage.type.thumbsUp, {
               key: key
            })
            this.websocket.send(JSON.stringify(message))
         }
      },
    }
})

    // Make app globally accessible
    window.app = app;
}

class WSMessage{
   constructor(type, content) {
      this.type = type
      this.content = content
   }
   static type = {
      thumbsUp: 'thumbs-up',
      heartBeat: 'heart-beat',
   }
}

// Load data and initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadChipData();
});

window.onresize = () => {
    if (window.app) {
   let heightChip = document.querySelector('.chip').offsetHeight + 40
   if (heightChip < innerHeight) { // pc
            window.app.heightApp = innerHeight
        }
   }
}

// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
    if (window.app) {
        window.app.didEnteredFullScreen = Boolean(document.fullscreenElement)
    }
}
