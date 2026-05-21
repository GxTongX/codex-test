# Personal Blog (React)

一个使用 **React + Vite** 搭建的纯前端个人博客示例项目，无登录、无后端，文章数据直接写死在前端代码中。

## 本地运行

```bash
npm install
npm run dev
```

## 本地构建

```bash
npm run build
npm run preview
```

## 一键部署到 GitHub Pages

项目已经内置 GitHub Actions 工作流：`.github/workflows/deploy.yml`。

### 使用步骤

1. 将代码推送到 GitHub 仓库。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Source: GitHub Actions**。
4. 推送到 `main` 分支后会自动触发部署。

部署完成后，访问地址通常为：

```text
https://<你的用户名>.github.io/<仓库名>/
```

## 项目说明

- 使用 React 组件化构建页面。
- 数据全部来自 `src/App.jsx` 内的静态数组。
- 样式位于 `src/styles.css`。
- `vite.config.js` 支持通过 `VITE_BASE_PATH` 配置部署子路径（用于 GitHub Pages）。
