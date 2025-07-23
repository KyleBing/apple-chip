<img src="https://github.com/KyleBing/apple-chip/raw/master/imgs/logo.png" width="100">

# Apple 芯片数据库

一个全面的 Apple A、S、M 系列处理器数据库，包含详细的规格参数。

## 项目结构

项目已重新组织以便更好地维护：

```
apple-chip/
├── js/                     # JavaScript 模块
│   ├── chip-data-loader.js # 数据加载和管理
│   └── request.js          # HTTP 请求工具
├── chip.js                 # 主应用程序
├── index.html              # 主页面
└── README.md               # 本文件
```

## 新组织方式的优势

### 1. **服务器数据加载**
- **自动从服务器获取数据**: 从 `http://kylebing.cn/portal/diary/get-latest-public-diary-with-keyword` 获取最新数据
- **关键词支持**: 使用 `apple-chip-a`、`apple-chip-s`、`apple-chip-m` 关键词
- **本地回退**: 如果服务器不可用，回退到本地数据

### 2. **模块化 JavaScript**
- **`js/chip-data-loader.js`**: 处理数据加载、处理和芯片数据管理
- **`js/request.js`**: 提供 HTTP 请求工具和认证功能

### 3. **数据管理**
- 自动从服务器加载最新芯片数据
- 支持实时数据更新
- 错误处理和回退机制

## 使用方法

### 数据加载

系统会自动：
1. 尝试从服务器加载最新数据
2. 如果服务器不可用，使用本地数据
3. 显示加载状态和错误信息

### 芯片数据结构

每个芯片都遵循以下结构：

```json
{
  "name": "A17 Pro",
  "model": "APL1V02",
  "tech": "3",
  "techCompany": "台积电",
  "dieSize": "105",
  "isa": "ARMv8.6-A",
  "cpu": [
    {
      "fire": {"rate": 3.78, "core": 2},
      "ice": {"rate": 2.11, "core": 4}
    }
  ],
  "gpu": [
    {
      "brand": "Apple",
      "core": 6,
      "info": "96 EUs, 768 ALUs @1398Mhz"
    }
  ],
  "ai": {
    "core": "16",
    "rate": "35 TOPS"
  },
  "release": "2023.09",
  "devices": [
    "iPhone 15 Pro",
    "iPhone 15 Pro Max"
  ],
  "transistorCount": "190",
  "os": {
    "init": "iOS 17.0",
    "latest": "最新"
  }
}
```

### 字段说明

- **name**: 芯片名称（如 "A17 Pro"）
- **model**: 内部型号（如 "APL1V02"）
- **tech**: 制造工艺（纳米）
- **techCompany**: 代工厂（如 "台积电" 代表 TSMC）
- **dieSize**: 芯片面积（平方毫米）
- **isa**: 指令集架构
- **cpu**: CPU 配置数组，包含 fire/ice 核心
- **gpu**: GPU 配置数组
- **ai**: AI/神经网络引擎规格
- **release**: 发布日期（YYYY.MM 格式）
- **devices**: 使用该芯片的设备数组
- **transistorCount**: 晶体管数量（亿）
- **os**: 操作系统支持

## 从旧版结构迁移

原始 `chip.js` 文件包含三个大型数组中的所有数据：
- `chipsModelA`
- `chipsModelS` 
- `chipsModelM`

**✅ 迁移已完成！** 数据现在已从 `chip.js` 移动到 JSON 文件：

- `data/chips-a.json` - A系列芯片数据
- `data/chips-s.json` - S系列芯片数据  
- `data/chips-m.json` - M系列芯片数据

### 迁移过程

1. ✅ 从每个数组中提取数据
2. ✅ 保存到 `data/` 文件夹中的相应 JSON 文件
3. ✅ 更新 `chip.js` 以使用新的数据加载器
4. ✅ 添加管理界面进行数据管理

### 当前状态

- **chip.js**: 现在只包含应用程序逻辑，不再包含芯片数据
- **JSON文件**: 包含所有芯片数据，便于管理和编辑
- **管理界面**: 提供用户友好的数据管理功能
- **数据加载器**: 动态加载JSON数据并保持向后兼容性

## 开发

### 在 index.html 中添加新脚本

在现有的 `chip.js` 之前添加这些脚本标签：

```html
<script src="js/chip-data-loader.js"></script>
<script src="js/chip-admin.js"></script>
```

### 更新主应用程序

您需要修改 Vue.js 应用程序以使用新的数据加载器而不是硬编码数组。`ChipDataLoader` 类提供了与之前相同格式访问数据的方法。

## 这种组织的优势

1. **更易维护**: 每个系列都在自己的文件中
2. **更好的版本控制**: 更小、更集中的更改
3. **用户友好的管理**: 非技术用户的管理界面
4. **数据验证**: 内置验证和错误处理
5. **可扩展性**: 易于添加新功能或系列
6. **备份和恢复**: 单个文件更容易备份和恢复

## 贡献

添加新芯片信息时：
1. 使用管理界面获得最佳体验
2. 遵循现有的数据结构
3. 确保填写所有必需字段
4. 在浏览器中测试更改
5. 如果添加新字段或功能，请更新此 README

## 线上地址

- iPhone: [http://kylebing.cn/tools/iphone](http://kylebing.cn/tools/iphone)
- iPad: [http://kylebing.cn/tools/ipad](http://kylebing.cn/tools/ipad)
- Apple Chip: [http://kylebing.cn/tools/apple-chip](http://kylebing.cn/tools/apple-chip)
- AirPods: [http://kylebing.cn/tools/airpods](http://kylebing.cn/tools/airpods)
- AppleWatch: [http://kylebing.cn/tools/apple-watch](http://kylebing.cn/tools/apple-watch)

## GitHub 地址

- iPhone: [https://github.com/KyleBing/iphone](https://github.com/KyleBing/iphone)
- iPad: [https://github.com/KyleBing/ipad](https://github.com/KyleBing/ipad)
- Apple Chip: [https://github.com/KyleBing/apple-chip](https://github.com/KyleBing/apple-chip)
- AirPods: [https://github.com/KyleBing/airpods](https://github.com/KyleBing/airpods)
- AppleWatch: [https://github.com/KyleBing/apple-watch](https://github.com/KyleBing/apple-watch)

## 预览

<img width="1920" alt="Screenshot 2023-03-30 at 20 08 29" src="https://user-images.githubusercontent.com/12215982/228832248-46f00382-97a4-42b6-ac97-ae907928faee.png">

## 修改说明

在每次修改 `css` 和 `js` 文件之后，需要更新 `index.html` 中引入文件位置的后缀，以实现消除浏览器缓存的目的。

```html
<link rel="stylesheet" href="scss/chip.css?v=20230215095940">
<script src="chip.js?v=20230215095940"></script>
```
