# 🐝 蜜蜂电影剧本网站 (Bee Movie Script)

一个专门提供完整蜜蜂电影剧本的现代化网站，支持多种格式和复制方式，让用户轻松获取和分享蜜蜂电影的经典台词。

## 📋 项目概述

这是一个基于 Next.js 14 的现代化网站，提供蜜蜂电影的完整剧本内容。网站设计了美观的蜜蜂主题界面，并提供了多种实用功能，让用户能够方便地获取、复制和分享蜜蜂电影的台词内容。

## ✨ 主要功能

### 🎯 核心功能
- **完整剧本展示**：提供蜜蜂电影的完整剧本内容
- **一键复制**：支持快速复制剧本内容到剪贴板
- **多种格式**：
  - 普通格式：完整的剧本内容，包含角色名称
  - 无空格版本：压缩格式，适合有字符限制的平台
  - 自动分段：根据平台字符限制自动分割剧本

### 📱 平台优化
- **Discord** (2000字符限制)
- **Twitter** (280字符限制)
- **Reddit** (10000字符限制)
- **YouTube** (5000字符限制)
- **Messenger** (20000字符限制)
- **WhatsApp** (4096字符限制)

### 🎪 特色功能
- **隐藏角色名称**：可选择只显示台词内容，隐藏角色名称
- **热门语录库**：精选的蜜蜂电影经典语录，支持快速复制
- **随机语录**：随机获取热门语录
- **剧本统计**：显示完整的剧本数据统计（字符数、单词数等）
- **响应式设计**：支持各种设备屏幕尺寸

### 🎨 界面特色
- **蜜蜂主题**：采用黄色和黑色为主的蜜蜂色彩方案
- **现代化设计**：使用shadcn/ui组件库，界面美观现代
- **深色模式**：支持明暗主题切换
- **动画效果**：丰富的交互动画，提升用户体验

## 🚀 技术栈

### 前端框架
- **Next.js 14**：React全栈框架
- **React 18**：用户界面库
- **TypeScript**：类型安全的JavaScript

### 样式和UI
- **Tailwind CSS 4**：实用优先的CSS框架
- **shadcn/ui**：高质量的React组件库
- **Radix UI**：无障碍访问的底层UI组件
- **Geist Font**：现代化字体方案
- **Lucide React**：美观的图标库

### 开发工具
- **ESLint**：代码质量检查
- **PostCSS**：CSS处理工具
- **pnpm**：快速的包管理器

## 📦 安装和使用

### 系统要求
- Node.js 18.0 或更高版本
- pnpm （推荐）或 npm

### 安装步骤

1. **克隆项目**
```bash
git clone [项目地址]
cd bee-movie-script
```

2. **安装依赖**
```bash
pnpm install
# 或者使用 npm
npm install
```

3. **启动开发服务器**
```bash
pnpm dev
# 或者使用 npm
npm run dev
```

4. **访问网站**
打开浏览器访问 http://localhost:3040

### 可用脚本

```bash
# 开发模式
pnpm dev          # 启动开发服务器（端口3040）

# 构建和部署
pnpm build        # 构建生产版本
pnpm start        # 启动生产服务器

# 代码质量
pnpm lint         # 运行ESLint检查
```

## 📁 项目结构

```
bee-movie-script/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式文件
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx          # 主页面组件
├── components/            # React组件
│   ├── ui/               # shadcn/ui基础组件
│   ├── header.tsx        # 页面头部组件
│   ├── hero-section.tsx  # 英雄区域组件
│   ├── key-features.tsx  # 特色功能组件
│   ├── how-to-use.tsx    # 使用指南组件
│   ├── faq-section.tsx   # 常见问题组件
│   ├── footer.tsx        # 页面底部组件
│   └── what-is-bee-movie-script.tsx  # 项目介绍组件
├── hooks/                # 自定义React Hooks
├── lib/                  # 工具函数库
├── public/               # 静态资源文件
└── styles/               # 样式文件
```

## 🎮 使用指南

### 基本使用

1. **访问网站**：打开网站后即可看到蜜蜂电影剧本的主要内容
2. **选择格式**：点击标签页选择想要的剧本格式（完整版、无空格版、自动分段版）
3. **复制内容**：点击"复制"按钮即可将内容复制到剪贴板
4. **分享使用**：将复制的内容粘贴到任意平台或应用中

### 高级功能

#### 隐藏角色名称
1. 找到"显示选项"卡片
2. 切换"隐藏角色名称"开关
3. 剧本将只显示台词内容，隐藏所有角色名称

#### 平台优化分段
1. 选择"自动分段"标签页
2. 点击平台按钮（如Discord、Twitter等）
3. 剧本将根据该平台的字符限制自动分段
4. 可以逐个复制每个分段

#### 快速获取语录
1. 使用首页的"随机语录"按钮获取经典台词
2. 滚动到"热门语录"区域查看所有经典语录
3. 点击任何语录旁的复制按钮即可复制

### 实用场景

- **社交媒体分享**：在Twitter、Facebook等平台分享经典台词
- **聊天软件**：在Discord、WhatsApp等聊天应用中发送蜜蜂电影台词
- **内容创作**：为视频、文章等内容添加蜜蜂电影的经典语录
- **表情包制作**：获取台词内容用于制作相关表情包

## 🛠️ 开发指南

### 代码结构说明

#### 主要组件
- `Header`：网站顶部导航栏
- `HeroSection`：首页英雄区域，包含主要的复制功能
- `WhatIsBeeMovieScript`：项目介绍和背景说明
- `KeyFeatures`：特色功能展示
- `HowToUse`：使用指南
- `FAQSection`：常见问题解答
- `Footer`：网站底部信息

#### 数据管理
- 蜜蜂电影剧本内容存储在 `page.tsx` 的 `BEE_MOVIE_SCRIPT` 常量中
- 热门语录存储在 `POPULAR_QUOTES` 数组中
- 使用React状态管理用户偏好设置

#### 样式系统
- 采用Tailwind CSS作为主要样式系统
- 使用CSS变量定义蜜蜂主题色彩
- 支持明暗模式切换

### 自定义开发

#### 添加新的剧本内容
```typescript
// 在 page.tsx 中修改 BEE_MOVIE_SCRIPT 常量
const BEE_MOVIE_SCRIPT = `您的新内容...`
```

#### 添加新的语录
```typescript
// 在 page.tsx 中修改 POPULAR_QUOTES 数组
const POPULAR_QUOTES = [
  "新的经典语录...",
  // ...其他语录
]
```

#### 添加新的平台支持
```typescript
// 在 page.tsx 的 platforms 数组中添加新平台
const platforms = [
  { name: "新平台", limit: 字符限制, color: "CSS类名" },
  // ...其他平台
]
```

## 🎨 设计理念

### 色彩方案
- **主色调**：蜜蜂黄 (#F5D800) - 代表蜜蜂的经典颜色
- **辅助色**：深黑色 (#000000) - 代表蜜蜂的条纹
- **背景色**：柔和的蜂蜜黄 - 营造温暖的视觉体验
- **卡片色**：纯白色 - 确保内容可读性

### 用户体验
- **直观操作**：一键复制，即点即用
- **响应式设计**：适配所有设备屏幕
- **加载优化**：快速加载，流畅体验
- **无障碍访问**：支持键盘导航和屏幕阅读器

## 📊 项目统计

- **剧本字符数**：约13万字符
- **剧本单词数**：约2.4万单词
- **热门语录**：11条精选语录
- **支持平台**：6个主流社交平台
- **组件数量**：40+ React组件

## 🤝 贡献指南

欢迎提交问题报告和功能请求！如果您想贡献代码：

1. Fork 这个项目
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📝 更新日志

### v1.0.0 (当前版本)
- ✅ 完整的蜜蜂电影剧本内容
- ✅ 多格式支持（正常、无空格、自动分段）
- ✅ 平台优化分段功能
- ✅ 热门语录快速复制
- ✅ 响应式设计和现代化界面
- ✅ 明暗主题支持
- ✅ 字体配置修复

## 🔮 未来计划

- [ ] 添加更多经典语录
- [ ] 支持更多社交平台的字符限制
- [ ] 添加语音播放功能
- [ ] 支持多语言版本
- [ ] 添加搜索功能
- [ ] 开发移动端应用

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

如果您有任何问题或建议，欢迎通过以下方式联系：

- 项目Issue：[提交问题报告](../../issues)
- 功能请求：[提交功能建议](../../issues)

---

**享受使用蜜蜂电影剧本网站！🐝✨**

> "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible."
