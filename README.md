# 导航站项目

## 项目介绍
这是一个专业的导航站网站，采用苹果风格设计，以小卡片形式展示各类网站资源。用户可以通过点击卡片直接访问对应网站，也可以使用搜索、分类筛选功能快速找到所需资源。

## 主要功能
1. **卡片式导航**：每个导航项以小卡片形式展示，封面为对应网站截图
2. **搜索功能**：支持快速搜索所有导航资源
3. **分类筛选**：按照不同类别筛选导航资源
4. **中英文切换**：支持中英文双语界面切换
5. **响应式设计**：适配各种设备尺寸

## 技术栈
- HTML5：提供语义化标签和结构
- TailwindCSS：实现现代化UI设计和响应式布局
- JavaScript：实现交互功能

## 项目结构
```
/
├── index.html          # 网站首页
├── assets/             # 静态资源目录
│   ├── css/            # CSS样式文件
│   │   ├── style.css   # 主样式文件
│   ├── js/             # JavaScript文件
│   │   ├── main.js     # 主脚本文件
│   ├── images/         # 图片资源
│   └── icons/          # 图标资源
└── README.md           # 项目说明文档
```

## 页面结构说明
- **头部(Header)**：包含网站标题、搜索栏和语言切换按钮
- **分类导航(Categories)**：展示所有资源分类
- **内容区(Content)**：以卡片形式展示所有导航资源
- **底部(Footer)**：包含版权信息和其他链接

## 实现计划
1. 创建基础HTML结构
2. 引入TailwindCSS并设计基础样式
3. 实现卡片布局和展示
4. 开发搜索和筛选功能
5. 实现中英文切换功能
6. 优化响应式设计
7. 测试并调整细节 