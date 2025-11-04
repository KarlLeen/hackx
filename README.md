# HackX - 黑客松平台

一个基于 Next.js、TypeScript 和 Tailwind CSS 构建的黑客松平台前端项目。

## 技术栈

- **Next.js 14** - React 框架，使用 App Router
- **TypeScript** - 类型安全
- **Tailwind CSS** - 实用优先的 CSS 框架
- **ESLint** - 代码检查

## 项目结构

```
HackX/
├── src/
│   └── app/
│       ├── layout.tsx      # 根布局
│       ├── page.tsx        # 首页
│       └── globals.css     # 全局样式
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 运行代码检查
npm run lint
```

## 设计规范

项目将严格遵循 Figma 设计稿，所有组件和样式都将与设计保持一致。

## 下一步

等待 Figma 设计稿通过 Figma MCP 提供，然后实现相应的 UI 组件和页面。

