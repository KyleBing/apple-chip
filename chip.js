/*****************************
 Create Date: 20200605175639
 Update Date: 20210904091940
 *****************************/

const dateLastEdit = '2023.06.06' // 2023.03.30

const latestOS = '最新'
const chipsModelA = [
   {
      name: 'A4',
      model: 'APL0398',
      tech: '45', // nm
      techCompany: '',
      dieSize: '53.3', // mm
      isa: 'ARMv7',
      cpu: [
         {fire: {rate: 1.0, core: 1}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR SGX535', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2010.03',
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
      cpu: [
         {fire: {rate: 1.0, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR SGX543MP2', core: 0, info: ''}
      ] ,
      ai: {
         core: '',
         rate: ''
      },
      release: '2011.03',
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
      cpu: [
         {fire: {rate: 1.0, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR SGX543MP2', core: 0, info: ''}
      ] ,
      ai: {
         core: '',
         rate: ''
      },
      release: '2012.03',
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
      cpu: [
         {fire: {rate: 1.0, core: 1}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR SGX543MP2', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2013.03',
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
      cpu: [
         {fire: {rate: 1.0, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR SGX543MP4', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2012.03',
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
      cpu: [
         {fire: {rate: 1.3, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR SGX543MP3', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2012.09',
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
      cpu: [
         {fire: {rate: 1.4, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR SGX554MP4', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2012.10',
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
      cpu: [
         {fire: {rate: 1.3, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR G6430', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2013.09',
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
      cpu: [
         {fire: {rate: 1.4, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR G6430', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2013.10',
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
      cpu: [
         {fire: {rate: 1.5, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR GXA6450', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2014.09',
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
      cpu: [
         {fire: {rate: 1.5, core: 3}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR GXA6850', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2014.10',
      devices: [
         'iPad Air 2 ( 2014 )'
      ],
      transistorCount: '≈ 30', // 亿
      os: {
         init: 'iOS 8.1',
         latest: 'iPadOS 15.5'
      }
   },
   {
      name: 'A9',
      model: 'APL0898',
      tech: '14', // nm
      techCompany: '三星',
      dieSize: '96', // mm
      isa: 'ARMv8.0-A',
      cpu: [
         {fire: {rate: 1.85, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR GT7600', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2015.09',
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
      cpu: [
         {fire: {rate: 1.85, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR GT7600', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2015.09',
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
      cpu: [
         {fire: {rate: 2.26, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR GTA7850', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2015.09',
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
      cpu: [
         {fire: {rate: 2.34, core: 2}, ice: {rate: 1.092, core: 2}}
      ],
      gpu: [
         {brand: 'PowerVR GT7600 Plus', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2016.09',
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
      cpu: [
         {fire: {rate: 2.36, core: 3}, ice: {rate: 1.3, core: 3}}
      ],
      gpu: [
         {brand: 'PowerVR GT7600 Plus', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2017.06',
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
      cpu: [
         {fire: {rate: 2.39, core: 2}, ice: {rate: 1.19, core: 4}}
      ],
      gpu: [
         {brand: 'Apple', core: 3, info: ''}
      ],
      ai: {
         core: '2',
         rate: '600 GOPS'
      },
      release: '2017.09',
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
      cpu: [
         {fire: {rate: 2.49, core: 2}, ice: {rate: 1.59, core: 4}}
      ],
      gpu: [
         {brand: 'Apple', core: 4, info: ''}
      ],
      ai: {
         core: '8',
         rate: '5TOPS'
      },
      release: '2018.09',
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
      cpu: [
         {fire: {rate: 2.49, core: 4}, ice: {rate: 1.59, core: 4}}
      ],
      gpu: [
         {brand: 'Apple', core: 7, info: ''}
      ],
      ai: {
         core: '8',
         rate: '5TOPS'
      },
      release: '2018.10',
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
      cpu: [
         {fire: {rate: 2.49, core: 4}, ice: {rate: 1.59, core: 4}}
      ],
      gpu: [
         {brand: 'Apple', core: 8, info: ''}
      ],
      ai: {
         core: '8',
         rate: '5TOPS'
      },
      release: '2020.03',
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
      cpu: [
         {fire: {rate: 2.65, core: 2}, ice: {rate: 1.8, core: 4}}
      ],
      gpu: [
         {brand: 'Apple', core: 4, info: ''}
      ],
      ai: {
         core: '8',
         rate: '5 TOPS'
      },
      release: '2019.09',
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
      cpu: [
         {fire: {rate: 3.09, core: 2}, ice: {rate: 1.823, core: 4}}
      ],
      gpu: [
         {brand: 'Apple', core: 4, info: ''}
      ],
      ai: {
         core: '16',
         rate: '11 TOPS'
      },
      release: '2020.09',
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
      model: 'APL1W07',
      tech: '5', // nm
      techCompany: '台积电 N5P',
      dieSize: '107.68', // mm
      isa: 'ARMv8.5-A',
      cpu: [
         {fire: {rate: 3.23, core: 2}, ice: {rate: 2.02, core: 4}},
         {fire: {rate: 2.93, core: 2}, ice: {rate: 2.02, core: 4}}
      ],
      gpu: [
         {brand: 'Apple', core: 4, info: '512 ALUs @ 1200 MHz'},
         {brand: 'Apple', core: 5, info: '640 ALUs @ 1200 MHz'}
      ],
      ai: {
         core: '16',
         rate: '15.8 TOPS'
      },
      release: '2021.09',
      devices: [
         'iPhone 13',
         'iPhone 13 Mini',
         'iPhone 13 Pro',
         'iPhone 13 Pro Max',
         'iPhone SE 3 (2022)',
         'iPad Mini 6 ( 2021 )',
         'iPhone 14',
         'iPhone 14 Plus',
      ],
      transistorCount: '150', // 亿
      os: {
         init: 'iOS 15',
         latest: latestOS
      }
   },
   {
      name: 'A16 Bionic',
      model: 'APL1W10',
      tech: '5', // nm
      techCompany: 'N4',
      dieSize: '-', // mm
      isa: 'ARMv8.6-A',
      cpu: [
         {fire: {rate: 3.46, core: 2}, ice: {rate: 2.02, core: 4}},
      ],
      gpu: [
         {brand: 'Apple', core: 6, info: ''}
      ],
      ai: {
         core: '16',
         rate: '17 TOPS'
      },
      release: '2022.09',
      devices: [
         'iPhone 14 Pro',
         'iPhone 14 Pro Max'
      ],
      transistorCount: '160', // 亿
      os: {
         init: 'iOS 16',
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
      cpu: [
         {fire: {rate: 0.52, core: 1}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR Series 5', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2015.04',
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
      cpu: [
         {fire: {rate: 0.52, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR Series 6', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2016.09',
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
      cpu: [
         {fire: {rate: 0.52, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'PowerVR Series 6', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2016.09',
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
      cpu: [
         {fire: {rate: 0, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: '', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2017.09',
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
      tech: '7', // nm
      techCompany: 'TSMC',
      dieSize: '', // mm
      isa: 'ARMv8-A ILP32',
      cpu: [
         {fire: {rate: 0, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'Apple G11M', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2018.09',
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
      tech: '7', // nm
      techCompany: 'TSMC',
      dieSize: '', // mm
      isa: 'ARMv8-A ILP32',
      cpu: [
         {fire: {rate: 0, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: 'Apple G11M', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2019.09',
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
      tech: 'N7P', // nm
      techCompany: 'TSMC',
      dieSize: '', // mm
      isa: '',
      cpu: [
         {fire: {rate: 1.8, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: '', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2020.09',
      devices: [
         'Apple Watch Series 6',
      ],
      os: {
         init: 'watchOS 7.0',
         latest: latestOS
      }
   },
   {
      name: 'S7',
      model: '',
      tech: 'N7P', // nm
      techCompany: 'TSMC',
      dieSize: '', // mm
      isa: '',
      cpu: [
         {fire: {rate: 1.8, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: '', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2021.09',
      devices: [
         'Apple Watch Series 7',
      ],
      os: {
         init: 'watchOS 8.0',
         latest: latestOS
      }
   },
   {
      name: 'S8',
      model: '',
      tech: 'N7P', // nm
      techCompany: 'TSMC',
      dieSize: '', // mm
      isa: '',
      cpu: [
         {fire: {rate: 1.8, core: 2}, ice: {}}
      ],
      gpu: [
         {brand: '', core: 0, info: ''}
      ],
      ai: {
         core: '',
         rate: ''
      },
      release: '2022.09',
      devices: [
         'Apple Watch Series 8',
         'Apple Watch Ultra',
         'Apple Watch Series SE(2)',
      ],
      os: {
         init: 'watchOS 9.0',
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
      isa: 'ARMv8.5-A',
      cpu: [
         {fire:{rate: 3.2, core: 4},ice: {rate: 2.064, core: 4}}
      ],
      gpu: [
         {brand: 'Apple', core: 7, info: '112 EUs, 896 ALUs @1278Mhz'},
         {brand: 'Apple', core: 8, info: '128 EUs, 1024 ALUs @1278Mhz'},
      ],
      ai: {
         core: '16',
         rate: '11 TOPS'
      },
      release: '2020.11.17',
      devices: [
         'MacBook Air 2020',
         'MacBook Pro 2020 (13\')',
         'Mac Mini 2020',
         'iPad Pro 5 ( 11寸 2021 )',
         'iPad Pro 5 ( 12.9寸 2021 )',
         'iPad Air 5 ( 10.9寸 2022 )',
      ],
      transistorCount: '160', // 亿
      os: {
         init: 'macOS Big Sur',
         latest: latestOS
      }
   },
   {
      name: 'M1 Pro',
      model: 'APL1103',
      tech: '5', // nm
      techCompany: '台积电',
      dieSize: '≈245', // mm
      isa: 'ARMv8.5-A',
      cpu: [
         {fire:{rate: 3.23, core: 6},ice: {rate: 2.06, core: 2}},
         {fire:{rate: 3.23, core: 8},ice: {rate: 2.06, core: 2}},
      ],
      gpu: [
         {brand: 'Apple', core: 14, info: '224 EUs, 1792 ALUs @1296Mhz'},
         {brand: 'Apple', core: 16, info: '256 EUs, 2048 ALUs @1296Mhz'},
      ],
      ai: {
         core: '16',
         rate: '11 TOPS'
      },
      release: '2021.10.19',
      devices: [
         'MacBook Pro 2021 (14\')',
         'MacBook Pro 2021 (16\')',
      ],
      transistorCount: '337', // 亿
      os: {
         init: 'macOS Monterey',
         latest: latestOS
      }
   },
   {
      name: 'M1 Max',
      model: 'APL1104',
      tech: '5', // nm
      techCompany: '台积电',
      dieSize: '≈432', // mm
      isa: 'ARMv8.5-A',
      cpu: [
         {fire:{rate: 3.23, core: 8},ice: {rate: 2.06, core: 2}},
      ],
      gpu: [
         {brand: 'Apple', core: 24, info: '384 EUs, 3072 ALUs @1296Mhz'},
         {brand: 'Apple', core: 32, info: '512 EUs, 4096 ALUs @1296Mhz'},
      ],
      ai: {
         core: '16',
         rate: '11 TOPS'
      },
      release: '2021.10.19',
      devices: [
         'MacBook Pro 2021 (14\')',
         'MacBook Pro 2021 (16\')',
         'Mac Studio (2022)',
      ],
      transistorCount: '570', // 亿
      os: {
         init: 'macOS Monterey',
         latest: latestOS
      }
   },
   {
      name: 'M1 Ultra',
      model: 'APL1W06',
      tech: '5', // nm
      techCompany: '',
      dieSize: '≈864', // mm
      isa: 'ARMv8.5-A',
      cpu: [
         {fire:{rate: 3.23, core: 16},ice: {rate: 2.06, core: 4}},
      ],
      gpu: [
         {brand: 'Apple', core: 48, info: '768 EUs, 6144 ALUs @1296Mhz'},
         {brand: 'Apple', core: 64, info: '1024 EUs, 8192 ALUs @1296Mhz'},
      ],
      ai: {
         core: '32',
         rate: '22 TOPS'
      },
      release: '2022.03.09',
      devices: [
         'Mac Studio (2022)',
      ],
      transistorCount: '1140', // 亿
      os: {
         init: 'macOS Monterey',
         latest: latestOS
      }
   },
   {
      name: 'M2',
      model: 'APL1109',
      tech: 'N5P', // nm
      part: 'T6002',
      techCompany: '台积电',
      dieSize: '155.25', // mm
      isa: 'ARMv8.5-A',
      cpu: [
         {
            fire:{rate: 3.49, core: 4},
            ice: {rate: 2.42, core: 4}
         }
      ],
      gpu: [
         {brand: 'Apple', core: 8, info: '256 EUs, 2048 ALUs @-Mhz'},
         {brand: 'Apple', core: 10, info: '320 EUs, 2560 ALUs @-Mhz'},
      ],
      ai: {
         core: '16',
         rate: '15.8 TOPS'
      },
      release: '2022.06.07',
      devices: [
         'MacBook Air 2022',
         'MacBook Pro 13\' 2022(bar)',
         'Mac Mini 2023',
         'MacBook Air 15\'(2023)',
      ],
      transistorCount: '200', // 亿
      os: {
         init: 'macOS Monterey',
         latest: latestOS
      }
   },
   {
      name: 'M2 Pro',
      model: '',
      tech: 'N5P', // nm
      part: 'T6020',
      techCompany: '台积电',
      dieSize: '', // mm
      isa: 'ARMv8.5-A',
      cpu: [
         {
            fire:{rate: 3.49, core: 6},
            ice: {rate: 2.42, core: 4}
         },
         {
            fire:{rate: 3.49, core: 8},
            ice: {rate: 2.42, core: 4}
         }
      ],
      gpu: [
         {brand: 'Apple', core: 16, info: ''},
         {brand: 'Apple', core: 19, info: ''},
      ],
      ai: {
      },
      release: '2023.01.17',
      devices: [
         'MacBook Pro 14\' 2023',
         'MacBook Pro 16\' 2023',
         'Mac Mini 2023',
      ],
      transistorCount: '400', // 亿
      os: {
         init: 'macOS Ventura',
         latest: latestOS
      }
   },
   {
      name: 'M2 Max',
      model: '',
      tech: 'N5P', // nm
      part: 'T6020',
      techCompany: '台积电',
      dieSize: '', // mm
      isa: 'ARMv8.5-A',
      cpu: [
         {
            fire:{rate: 3.49, core: 8},
            ice: {rate: 2.42, core: 4}
         },
      ],
      gpu: [
         {brand: 'Apple', core: 30, info: ''},
         {brand: 'Apple', core: 38, info: ''},
      ],
      ai: {
      },
      release: '2023.01.17',
      devices: [
         'MacBook Pro 14\' 2023',
         'MacBook Pro 16\' 2023',
         'Mac Studio(2023)',
      ],
      transistorCount: '670', // 亿
      os: {
         init: 'macOS Ventura',
         latest: latestOS
      }
   },
   {
      name: 'M2 Ultra',
      model: '',
      tech: 'N5P', // nm
      part: 'T6020',
      techCompany: '台积电',
      dieSize: '', // mm
      isa: 'ARMv8.5-A',
      cpu: [
         {
            fire:{rate: 3.49, core: 16},
            ice: {rate: 2.42, core: 8}
         },
      ],
      gpu: [
         {brand: 'Apple', core: 60, info: ''},
         {brand: 'Apple', core: 76, info: ''},
      ],
      ai: {
         core: '32',
      },
      release: '2023.06.05',
      devices: [
         'MacBook Pro 14\' 2023',
         'MacBook Pro 16\' 2023',
         'Mac Studio(2023)',
         'Mac Pro(2023)',
      ],
      transistorCount: '1340', // 亿
      os: {
         init: 'macOS Sonoma',
         latest: latestOS
      }
   },
]
const contributors = [
   'KyleBing','Zgc.Seven','皇家电脑','金东焕（麒麟，嗯就这名）','辉','梁育铭','Meipo','wrj1215', 'Kirin КуaкmБaпрасзenвын'
]

let chipsA = chipsModelA.reverse()
let chipsS = chipsModelS.reverse()
let chipsM = chipsModelM.reverse()


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
            case 'A': this.chips = chipsA; break
            case 'S': this.chips = chipsS; break
            case 'M': this.chips = chipsM; break
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
         this.websocket = new WebSocket('wss://kylebing.cn/ws')
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

window.onresize = () => {
   let heightChip = document.querySelector('.chip').offsetHeight + 40
   if (heightChip < innerHeight) { // pc
      app.heightApp = innerHeight
   }
}


// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
   app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}
