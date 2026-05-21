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
4. 推送到 `master` 分支后会自动触发部署。

### 访问地址

这个仓库的 Pages 地址是：

```text
https://gxtongx.github.io/codex-test/
```

> 注意：如果你看到 “There isn't a GitHub Pages site here.”，说明 Pages 还没成功发布，或还在首次生效中（通常需要几分钟）。

通用格式为：`https://<你的用户名>.github.io/<仓库名>/`

### 怎么看 Action 有没有部署成功

1. 打开仓库的 **Actions** 页面。
2. 进入最新一次 **Deploy to GitHub Pages** 工作流运行记录。
3. 确认 `build` 和 `deploy` 两个 Job 都是绿色勾（Success）。
4. 点进 `deploy` Job，查看 `Deploy to GitHub Pages` 这一步的输出，出现 page URL 即代表部署成功。
5. 也可以到 **Settings → Pages** 查看 “Your site is live at ...” 的提示。

### 常见报错排查

- **分支不对**：工作流只监听 `master`，请确认是推送到 `master`。
- **Pages Source 没选对**：必须是 **GitHub Actions**，不是 Deploy from a branch。
- **权限问题**：仓库需开启 Actions，且工作流里 `pages: write`、`id-token: write` 权限不能被组织策略拦截。
- **仓库可见性/套餐限制**：私有仓库在部分账户类型下可能受限，建议先用公开仓库验证。
- **路径不匹配**：本项目已通过 `VITE_BASE_PATH=/${{ github.event.repository.name }}/` 处理子路径，若你改了仓库名，需要重新部署。

## 项目说明

- 使用 React 组件化构建页面。
- 数据全部来自 `src/App.jsx` 内的静态数组。
- 样式位于 `src/styles.css`。
- `vite.config.js` 支持通过 `VITE_BASE_PATH` 配置部署子路径（用于 GitHub Pages）。
