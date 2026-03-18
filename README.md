
# Case 管理与知识库系统 (Case Management & Knowledge Base)

本项目是一个专为 **Application Support** 学习与实践设计的综合管理平台。它集成了工单（Case）追踪、Markdown 知识库笔记以及自动化的运维部署流程。

## 核心功能 (Core Features)

### 1. 工单管理 (Case Management)
* **多维展示**：支持列表展示工单状态、优先级及分类。
* **交互式操作**：提供创建、编辑、查看和“软删除”功能。删除的工单会进入回收站，可随时还原。
* **权限控制**：区分 Admin 和 Guest 模式。Admin 拥有完整的 CRUD 权限，Guest 仅限查看。

### 2. 知识库笔记 (Knowledge Base)
* **Markdown 支持**：笔记内容完整支持 Markdown 语法渲染，并集成了代码高亮功能。
* **智能搜索**：支持跨全量笔记的内容实时搜索，并对匹配词进行高亮显示。
* **自由排序**：内置拖拽排序功能，允许用户根据重要程度自定义笔记顺序。
* **代码便捷操作**：代码块配有一键复制按钮，并针对 Mac 风格进行了 UI 深度优化。

### 3. 交互与 UI (User Interface)
* **iOS/Mac 风格**：采用毛玻璃（Glassmorphism）设计，支持原生手势滑动切换面板。
* **深色模式**：内置主题切换功能，自动适配不同光线环境。

---

## 技术栈 (Tech Stack)

* **前端**: Vue 3.
* **后端**: Node.js (Express).
* **数据库**: MySQL.
* **部署**: Shell 脚本 + Rsync.

---

## 快速开始 (Getting Started)

### 1. 环境准备
* Node.js (建议 v18+)
* MySQL 数据库

### 2. 后端配置
进入 `server` 目录，配置环境变量并启动：
```bash
cd server
npm install
# 修改 .env 文件配置数据库连接
node index.js
```

### 3. 前端启动
进入根目录，安装依赖并运行：
```bash
npm install
npm run dev
```

### 4. 生产打包与部署
项目包含了自动部署脚本 `deploy.sh`。配置好服务器 SSH 免密登录后，可一键发布：
```bash
./deploy.sh
```

---

## 项目结构 (Project Structure)

* `src/App.vue`: 应用主逻辑，处理权限、导航与全局状态。
* `src/components/KnowledgeCard.vue`: 知识库核心组件，处理 Markdown 渲染与交互。
* `src/components/CasesCard.vue`: 工单列表展示组件。
* `src/services/api.js`: 统一封装的后端 API 请求层。
* `server/`: 后端代码，包含 API 路由与数据库逻辑。

---

# Case Management & Knowledge Base System

A comprehensive platform designed for **Application Support** learning and practice, integrating case tracking, Markdown-based knowledge management, and automated deployment workflows.

## Key Features

### 1. Case Tracking
* **Dynamic List**: Display cases with priority, category, and status badges.
* **Full Lifecycle**: Create, edit, view, and "soft delete" cases. Deleted cases are moved to a Trash bin for restoration.
* **Access Control**: Toggle between Admin and Guest modes to secure management functions.

### 2. Knowledge Base
* **Rich Markdown**: Full support for Markdown rendering with integrated syntax highlighting.
* **Global Search**: Real-time content search across all categories with keyword highlighting.
* **Custom Sorting**: Drag-and-drop functionality to reorder notes freely.
* **Code Utilities**: One-click copy for code blocks with a refined Mac-style UI.

### 3. Design & Experience
* **iOS/Mac Aesthetic**: Modern Glassmorphism UI with smooth gesture-based tab switching.
* **Theme Engine**: Built-in Dark Mode support.

## Deployment

The project includes a `deploy.sh` script for streamlined production releases using `rsync`. Ensure SSH key-based authentication is configured on your server before running the script.
