/*****************************
 Create Date: 20200605175639
 Update Date: 20210904091940
 *****************************/

const latestOS = '最新';
const chipsModelA = [
   {
      name: 'A4',
      model: 'APL0398',
      tech: '45', // nm
      techCompany: '',
      dieSize: '53.3', // mm
      isa: 'ARMv7',
      cpu: {
         rate: [0.8, 1.0],
         core: 1
      },
      gpu: 'PowerVR SGX535',
      release: '2010-03',
      devices: [
         'iPad 1 ( 2010 )',
         'iPhone 4',
         'iPod Touch ( 4代 )',
         'Apple TV ( 2代 )'
      ],
      os: {
         init: '',
         latest: ''
      }
   },
   {
      name: 'A5',
      model: 'APL0498',
      tech: '45', // nm
      techCompany: '',
      dieSize: '122.2', // mm
      isa: 'ARMv7',
      cpu: {
         rate: [0.8, 1.0],
         core: 2
      },
      gpu: 'PowerVR SGX543MP2',
      release: '2011-03',
      devices: [
         'iPad 2 ( 2011 )',
         'iPhone 4S'
      ],
      os: {
         init: '',
         latest: ''
      }
   },
   {
      name: 'A5',
      model: 'APL2498',
      tech: '32', // nm
      techCompany: 'HKMG',
      dieSize: '69.6', // mm
      isa: 'ARMv7',
      cpu: {
         rate: [0.8, 1.0],
         core: 2
      },
      gpu: 'PowerVR SGX543MP2',
      release: '2012-03',
      devices: [
         'Apple TV ( 3代 )',
         'iPad 2 ( 2011 )',
         'iPod Touch ( 5代 )',
         'iPad Mini 1 ( 2012 )'
      ],
      os: {
         init: '',
         latest: ''
      }
   },
   {
      name: 'A5',
      model: 'APL7498',
      tech: '32', // nm
      techCompany: 'HKMG',
      dieSize: '37.8', // mm
      isa: 'ARMv7',
      cpu: {
         rate: [0.8, 1.0],
         core: 1
      },
      gpu: 'PowerVR SGX543MP2',
      release: '2013-03',
      devices: [
         'Apple TV ( 3代 )'
      ],
      os: {
         init: '',
         latest: ''
      }
   },
   {
      name: 'A5X',
      model: 'APL5498',
      tech: '45', // nm
      techCompany: '',
      dieSize: '165', // mm
      isa: 'ARMv7',
      cpu: {
         rate: [1.0],
         core: 2
      },
      gpu: 'PowerVR SGX543MP4',
      release: '2012-03',
      devices: [
         'iPad 3 ( 2012 )',
      ],
      os: {
         init: '',
         latest: ''
      }
   },
   {
      name: 'A6',
      model: 'APL0598',
      tech: '32', // nm
      techCompany: 'HKMG',
      dieSize: '96.71', // mm
      isa: 'ARMv7s',
      cpu: {
         rate: [1.3],
         core: 2
      },
      gpu: 'PowerVR SGX543MP3',
      release: '2012-09',
      devices: [
         'iPhone 5',
         'iPhone 5C',
      ],
      os: {
         init: '',
         latest: ''
      }
   },
   {
      name: 'A6X',
      model: 'APL5598',
      tech: '32', // nm
      techCompany: 'HKMG',
      dieSize: '123', // mm
      isa: 'ARMv7s',
      cpu: {
         rate: [1.4],
         core: 2
      },
      gpu: 'PowerVR SGX554MP4',
      release: '2012-10',
      devices: [
         'iPad 4 ( 2012 )',
      ],
      os: {
         init: '',
         latest: ''
      }
   },
   {
      name: 'A7',
      model: 'APL0698',
      tech: '28', // nm
      techCompany: 'HKMG',
      dieSize: '102', // mm
      isa: 'ARMv8.0-A',
      cpu: {
         rate: [1.3],
         core: 2
      },
      gpu: 'PowerVR G6430',
      release: '2013-09',
      devices: [
         'iPhone 5S',
         'iPad Mini 2 ( 2013 )',
         'iPad Mini 3 ( 2014 )'
      ],
      transistorCount: '≈ 10', // 亿
      os: {
         init: 'iOS 7.0',
         latest: 'iOS 12, iPadOS 13'
      }
   },
   {
      name: 'A7',
      model: 'APL5698',
      tech: '28', // nm
      techCompany: 'HKMG',
      dieSize: '102', // mm
      isa: 'ARMv8.0-A',
      cpu: {
         rate: [1.4],
         core: 2
      },
      gpu: 'PowerVR G6430',
      release: '2013-10',
      devices: [
         'iPad Air 1 ( 2013 )',
      ],
      transistorCount: '≈ 10', // 亿
      os: {
         init: 'iOS 7.03',
         latest: 'iPadOS 12'
      }
   },
   {
      name: 'A8',
      model: 'APL1011',
      tech: '20', // nm
      techCompany: '台积电',
      dieSize: '89', // mm
      isa: 'ARMv8.0-A',
      cpu: {
         rate: [1.1, 1.5],
         core: 2
      },
      gpu: 'PowerVR GXA6450',
      release: '2014-09',
      devices: [
         'iPhone 6',
         'iPhone 6 Plus',
         'iPad Touch ( 6代 )',
         'iPad Mini 4',
         'Apple TV ( 4代 )',
         'HomePod'
      ],
      transistorCount: '≈ 20', // 亿
      os: {
         init: 'iOS 8.0',
         latest: 'iOS 12, iPadOS 13'
      }
   },
   {
      name: 'A8X',
      model: 'APL1012',
      tech: '20', // nm
      techCompany: '台积电',
      dieSize: '128', // mm
      isa: 'ARMv8.0-A',
      cpu: {
         rate: [1.5],
         core: 3
      },
      gpu: 'PowerVR GXA6850',
      release: '2014-10',
      devices: [
         'iPad Air 2 ( 2014 )'
      ],
      transistorCount: '≈ 30', // 亿
      os: {
         init: 'iOS 8.1',
         latest: 'iOS 12, iPadOS 13'
      }
   },
   {
      name: 'A9',
      model: 'APL0898',
      tech: '14', // nm
      techCompany: '三星',
      dieSize: '96', // mm
      isa: 'ARMv8.0-A',
      cpu: {
         rate: [1.85],
         core: 2
      },
      gpu: 'PowerVR GT7600',
      release: '2015-09',
      devices: [
         'iPhone 6S',
         'iPhone 6S Plus',
         'iPhone SE ( 1代 )',
         'iPad 5 ( 2017 )'
      ],
      transistorCount: '> 20', // 亿
      os: {
         init: 'iOS 9.0',
         latest: latestOS
      }
   },
   {
      name: 'A9',
      model: 'APL1022',
      tech: '16', // nm
      techCompany: '台积电',
      dieSize: '104.5', // mm
      isa: 'ARMv8.0-A',
      cpu: {
         rate: [1.85],
         core: 2
      },
      gpu: 'PowerVR GT7600',
      release: '2015-09',
      devices: [
         'iPhone 6S',
         'iPhone 6S Plus',
         'iPhone SE ( 1代 )',
         'iPad 5 ( 2017 )'
      ],
      transistorCount: '> 20', // 亿
      os: {
         init: 'iOS 9.0',
         latest: latestOS
      }
   },
   {
      name: 'A9X',
      model: 'APL1021',
      tech: '16', // nm
      techCompany: '台积电',
      dieSize: '143.9', // mm
      isa: 'ARMv8.0-A',
      cpu: {
         rate: [2.16, 2.26],
         core: 2
      },
      gpu: 'PowerVR GTA7850',
      release: '2015-09',
      devices: [
         'iPad Pro 1 ( 12.9寸 2015 )',
         'iPad Pro 1 ( 9.7寸 2016 )',
      ],
      transistorCount: '> 30', // 亿
      os: {
         init: 'iOS 9.1',
         latest: latestOS
      }
   },
   {
      name: 'A10 Fusion',
      model: 'APL1W24',
      tech: '16', // nm
      techCompany: '台积电',
      dieSize: '125', // mm
      isa: 'ARMv8.1-A',
      cpu: {
         rate: [2.34],
         core: 4
      },
      gpu: 'PowerVR GT7600 Plus',
      release: '2016-09',
      devices: [
         'iPhone 7',
         'iPhone 7 Plus',
         'iPod Touch ( 7代 )',
         'iPad 6 ( 2018 )',
         'iPad 7 ( 2019 )'
      ],
      transistorCount: '33', // 亿
      os: {
         init: 'iOS 10',
         latest: latestOS
      }
   },
   {
      name: 'A10X Fusion',
      model: 'APL1071',
      tech: '10', // nm
      techCompany: '台积电',
      dieSize: '96.4', // mm
      isa: 'ARMv8.1-A',
      cpu: {
         rate: [2.36],
         core: 6
      },
      gpu: 'PowerVR GT7600 Plus',
      release: '2017-06',
      devices: [
         'iPad Pro 2 ( 10.5寸 2017 )',
         'iPad Pro 2 ( 12.9寸 2017 )',
         'Apple TV 4k'
      ],
      transistorCount: '> 40', // 亿
      os: {
         init: 'iOS 10.3.2',
         latest: latestOS
      }
   },
   {
      name: 'A11 Bionic',
      model: 'APL1W72',
      tech: '10', // nm
      techCompany: '台积电',
      dieSize: '87.66', // mm
      isa: 'ARMv8.2-A',
      cpu: {
         rate: [2.39],
         core: 6
      },
      gpu: 'Apple x3',
      release: '2017-09',
      devices: [
         'iPhone 8',
         'iPhone 8 Plus',
         'iPhone X',
      ],
      transistorCount: '43', // 亿
      os: {
         init: 'iOS 11',
         latest: latestOS
      }
   },
   {
      name: 'A12 Bionic',
      model: 'APL1W81',
      tech: '7', // nm
      techCompany: '台积电 N7',
      dieSize: '83.27', // mm
      isa: 'ARMv8.3-A',
      cpu: {
         rate: [2.49],
         core: 6
      },
      gpu: 'Apple x4',
      release: '2018-09',
      devices: [
         'iPhone XS',
         'iPhone XS Max',
         'iPhone XR',
         'iPad Air 3 ( 2019 )',
         'iPad Mini 5 ( 2019 )'
      ],
      transistorCount: '69', // 亿
      os: {
         init: 'iOS 12',
         latest: latestOS
      }
   },
   {
      name: 'A12X Bionic',
      model: 'APL1083',
      tech: '7', // nm
      techCompany: '台积电 N7',
      dieSize: '≈ 135', // mm
      isa: 'ARMv8.3-A',
      cpu: {
         rate: [2.49],
         core: 8
      },
      gpu: 'Apple x6',
      release: '2018-10',
      devices: [
         'iPad Pro 3 ( 11寸 2018 )',
         'iPad Pro 3 ( 12.9寸 2018 )'
      ],
      transistorCount: '100', // 亿
      os: {
         init: 'iOS 12.1',
         latest: latestOS
      }
   },
   {
      name: 'A12Z Bionic',
      model: 'APL1083',
      tech: '7', // nm
      techCompany: '台积电 N7',
      dieSize: '≈ 135', // mm
      isa: 'ARMv8.3-A',
      cpu: {
         rate: [2.49],
         core: 8
      },
      gpu: 'Apple x8',
      release: '2020-03',
      devices: [
         'iPad Pro 4 ( 11寸 2020 )',
         'iPad Pro 4 ( 12.9寸 2020 )'
      ],
      transistorCount: '100', // 亿
      os: {
         init: 'iPadOS 13.4.1',
         latest: latestOS
      }
   },
   {
      name: 'A13 Bionic',
      model: 'APL1W85',
      tech: '7', // nm
      techCompany: '台积电 N7P',
      dieSize: '98.48', // mm
      isa: 'ARMv8.4-A',
      cpu: {
         rate: [2.65],
         core: 6
      },
      gpu: 'Apple x4',
      release: '2019-09',
      devices: [
         'iPhone 11',
         'iPhone 11 Pro',
         'iPhone 11 Pro Max',
         'iPhone SE ( 2代 2020 )',
         'iPad 9 ( 2021 )'
      ],
      transistorCount: '85', // 亿
      os: {
         init: 'iOS 13',
         latest: latestOS
      }
   },
   {
      name: 'A14 Bionic',
      model: 'APL1W87',
      tech: '5', // nm
      techCompany: '台积电 N5',
      dieSize: '88', // mm
      isa: 'ARMv8.5-A',
      cpu: {
         rate: [3.1],
         core: 6
      },
      gpu: 'Apple x4',
      release: '2020-09',
      devices: [
         'iPad Air 4 (2020 )',
         'iPhone 12',
         'iPhone 12 Mini',
         'iPhone 12 Pro',
         'iPhone 12 Pro Max',
      ],
      transistorCount: '118', // 亿
      os: {
         init: 'iOS 14',
         latest: latestOS
      }
   },
   {
      name: 'A15 Bionic',
      model: 'unknow',
      tech: '5', // nm
      techCompany: '台积电 N5',
      dieSize: '--', // mm
      isa: '--',
      cpu: {
         rate: [0],
         core: 6
      },
      gpu: 'Apple x5',
      release: '2021-09',
      devices: [
         'iPhone 13',
         'iPhone 13 Mini',
         'iPhone 13 Pro',
         'iPhone 13 Pro Max',
         'iPad Mini 6 ( 2021 )',
      ],
      transistorCount: '150', // 亿
      os: {
         init: 'iOS 15',
         latest: latestOS
      }
   }
]
const chipsModelS = [
   {
      name: 'S1',
      model: 'APL0778',
      tech: '28', // nm
      techCompany: 'HKMG',
      dieSize: '32', // mm
      isa: 'ARMv7k',
      cpu: {
         rate: [0.52],
         core: 1
      },
      gpu: 'PowerVR Series 5',
      release: '2015-04',
      devices: [
         'Apple Watch (1代)',
      ],
      os: {
         init: 'watchOS 1.0',
         latest: 'watchOS 4.3.2'
      }
   },
   {
      name: 'S1P',
      model: '',
      tech: '', // nm
      techCompany: '',
      dieSize: '', // mm
      isa: 'ARMv7k',
      cpu: {
         rate: [0.52],
         core: 2
      },
      gpu: 'PowerVR Series 6',
      release: '2016-09',
      devices: [
         'Apple Watch Series 1',
      ],
      os: {
         init: 'watchOS 3.0',
         latest: 'watchOS 6.x'
      }
   },
   {
      name: 'S2',
      model: '',
      tech: '', // nm
      techCompany: '',
      dieSize: '', // mm
      isa: 'ARMv7k',
      cpu: {
         rate: [0.52],
         core: 2
      },
      gpu: 'PowerVR Series 6',
      release: '2016-09',
      devices: [
         'Apple Watch Series 2',
      ],
      os: {
         init: 'watchOS 3.0',
         latest: 'watchOS 6.x'
      }
   },
   {
      name: 'S3',
      model: '',
      tech: '', // nm
      techCompany: '',
      dieSize: '', // mm
      isa: 'ARMv7k',
      cpu: {
         rate: [],
         core: 2
      },
      gpu: '',
      release: '2017-09',
      devices: [
         'Apple Watch Series 3',
      ],
      os: {
         init: 'watchOS 4.0',
         latest: latestOS
      }
   },
   {
      name: 'S4',
      model: '',
      tech: '', // nm
      techCompany: '',
      dieSize: '', // mm
      isa: 'ARMv8-A ILP32',
      cpu: {
         rate: [],
         core: 2
      },
      gpu: 'Apple G11M',
      release: '2018-09',
      devices: [
         'Apple Watch Series 4',
      ],
      os: {
         init: 'watchOS 5.0',
         latest: latestOS
      }
   },
   {
      name: 'S5',
      model: '',
      tech: '', // nm
      techCompany: '',
      dieSize: '', // mm
      isa: 'ARMv8-A ILP32',
      cpu: {
         rate: [],
         core: 2
      },
      gpu: 'Apple G11M',
      release: '2019-09',
      devices: [
         'Apple Watch Series 5',
         'Apple Watch Series SE',
      ],
      os: {
         init: 'watchOS 6.0',
         latest: latestOS
      }
   },
   {
      name: 'S6',
      model: '',
      tech: '', // nm
      techCompany: '',
      dieSize: '', // mm
      isa: '',
      cpu: {
         rate: [],
         core: 2
      },
      gpu: '',
      release: '2020-09',
      devices: [
         'Apple Watch Series 6',
      ],
      os: {
         init: 'watchOS 7.0',
         latest: latestOS
      }
   },
]
const chipsModelM = [
   {
      name: 'M1',
      model: 'APL1102',
      tech: '5', // nm
      techCompany: '台积电',
      dieSize: '119', // mm
      isa: 'ARMv8-A, AArch64',
      cpu: {
         rate: [3.2],
         core: 8
      },
      gpu: 'Apple x8',
      release: '2020-11-17',
      devices: [
         'MacBook Air 2020',
         'MacBook Pro 2020 (13\')',
         'MacBook Mini 2020',
         'iPad Pro 5 ( 11寸 2021 )',
         'iPad Pro 5 ( 12.9寸 2021 )'
      ],
      transistorCount: '160', // 亿
      os: {
         init: 'macOS Big Sur',
         latest: 'macOS Big Sur'
      }
   },
]

let chipsA = chipsModelA.reverse();
let chipsS = chipsModelS.reverse();
let chipsM = chipsModelM.reverse();


let app = new Vue({
   el: '#app',
   data: {
      // full screen 相关
      showFullScreenBtn: false,
      didEnteredFullScreen: false,
      // 浏览器参数
      portraitMode: false,
      mobileMode: false,
      model: 'A',
      heightApp: 0,
      inMobile: false,
      chips: chipsA
   },
   mounted(){
      // 全屏相关
      let chromeCore = /Chrome/i.test(navigator.userAgent);
      let mobileMode = /Mobile/i.test(navigator.userAgent);
      this.portraitMode = window.innerWidth > window.innerHeight;
      this.mobileMode = mobileMode;
      this.showFullScreenBtn = chromeCore && !mobileMode;
      this.relocate(); // relocate items
   },

   watch: {
      model() {
         switch (this.model) {
            case 'A': this.chips = chipsA; break;
            case 'S': this.chips = chipsS; break;
            case 'M': this.chips = chipsM; break;
         }
         this.relocate();
      }
   },
   methods: {
      // 全屏显示
      enterFullScreen(){
         document.documentElement.requestFullscreen().then();
      },
      switchModels(model){
         this.model = model
      },
      relocate(){
         this.heightApp = 0;
         this.$nextTick().then(() => {
            let heightChip = document.querySelector('.chip').offsetHeight + 40;
            console.log(heightChip)
            if (heightChip < innerHeight) { // .card 高度小于屏幕高度时
               document.querySelector('.card-container').style.position = 'fixed';
               this.heightApp = innerHeight;
               // pc
               if (!this.mobileMode){
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
               } else {
                  window.onscroll = null
               }
            } else {
               document.querySelector('body').style.height = 'auto';
               document.querySelector('.card-container').style.position = 'relative';
               window.onscroll = null

            }
         })
      }
   }
})

window.onresize = () => {
   let heightChip = document.querySelector('.chip').offsetHeight + 40;
   if (heightChip < innerHeight) { // pc
      app.heightApp = innerHeight
   }
}


// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
   app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}
