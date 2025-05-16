# 个人网站

基于Astro和TailwindCSS构建的个人网站，使用DaisyUI组件库。

## 技术栈

- **前端框架**：[Astro](https://astro.build/) - 静态站点生成器
- **UI库**：[TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **部署**：[Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/)

## 本地开发

### 前提条件

- Node.js 14.x 或更高版本
- npm 或 yarn

### 安装依赖

```bash
# 进入项目目录
cd personal-site

# 安装依赖
npm install
# 或者使用 yarn
yarn install
```

### 开发服务器

```bash
# 启动开发服务器
npm run dev
# 或者使用 yarn
yarn dev
```

开发服务器将在 http://localhost:3000 启动。

### 构建项目

```bash
# 构建生产版本
npm run build
# 或者使用 yarn
yarn build
```

构建后的文件将位于 `dist` 目录中。

## 部署说明

### 部署到Vercel（推荐）

1. 在 [Vercel](https://vercel.com/) 创建一个账户
2. 将项目推送到GitHub仓库
3. 在Vercel中导入该仓库
4. Vercel会自动检测Astro项目并使用正确的构建命令
5. 部署完成后，Vercel会提供一个URL访问你的网站

### 部署到GitHub Pages

1. 在 `astro.config.mjs` 文件中，确保 `site` 和 `base` 配置正确：

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name/',
  // ...
});
```

2. 创建 `.github/workflows/deploy.yml` 文件以设置GitHub Actions自动部署：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages
          folder: dist
```

3. 推送到GitHub仓库
4. 在仓库设置中启用GitHub Pages，并选择 `gh-pages` 分支作为源

## 项目结构

```
personal-site/
├── public/               # 静态资源
├── src/
│   ├── components/       # 可重用组件
│   ├── layouts/          # 页面布局
│   └── pages/            # 页面
├── astro.config.mjs      # Astro配置
├── tailwind.config.js    # TailwindCSS配置
├── package.json          # 项目依赖
└── README.md             # 项目说明
```

## 自定义

1. 修改 `src/layouts/Layout.astro` 文件以更改网站布局
2. 修改 `src/pages/` 目录中的文件以更新页面内容
3. 在 `tailwind.config.js` 中调整主题配置

## 许可证

MIT 