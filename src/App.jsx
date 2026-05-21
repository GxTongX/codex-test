import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';

const blogProfile = {
  name: '小林',
  title: '前端开发者 · 记录学习与生活',
  intro:
    '欢迎来到我的个人博客，这里会分享我在前端开发、效率工具和日常生活中的思考与总结。',
};

const categories = ['前端开发', '学习笔记', '生活记录'];

const posts = [
  {
    id: 1,
    title: '从 0 到 1 做一个 React 小项目，我学到了什么？',
    date: '2026-05-18',
    category: '前端开发',
    summary:
      '记录我搭建第一个 React 项目的完整流程：需求拆解、组件划分、样式组织以及上线前自检。',
    tags: ['React', '项目实战', '总结'],
    content: [
      '这个项目一开始我只写了一句话目标：做一个可以上线的个人博客。目标越具体，后面每一步决策就越清晰。',
      '我先把需求拆成 3 部分：页面结构、数据组织和部署流程。页面结构决定组件边界，数据组织决定后续扩展性。',
      '在组件划分上，我把「信息展示」和「交互逻辑」分开，后续新增文章详情页时几乎不需要重写列表结构。',
      '上线前我做了一个简短自检清单：移动端布局、标题层级、链接可点击、构建产物路径是否正确。',
    ],
  },
  {
    id: 2,
    title: '我常用的 5 个高效学习方法',
    date: '2026-05-10',
    category: '学习笔记',
    summary:
      '分享我在学习新技术时最常用的 5 个方法，包括费曼学习法、主题拆分与间隔复习。',
    tags: ['学习方法', '成长'],
    content: [
      '第一步是先建立学习地图：我会先列出核心概念，再按「必须理解 / 以后再看」做优先级排序。',
      '第二步是费曼学习法，把刚学到的内容用自己的话写成 200 字说明，检查理解漏洞。',
      '第三步是主题拆分，每次只攻克一个子问题，避免在多个文档之间反复跳转。',
      '第四步是间隔复习，1 天、3 天、7 天回看笔记；第五步是输出实践，哪怕写一个最小 demo。',
    ],
  },
  {
    id: 3,
    title: '周末城市漫步：在慢节奏里找灵感',
    date: '2026-05-03',
    category: '生活记录',
    summary:
      '远离屏幕半天，去街头走走看看。很多内容灵感，其实都来自生活本身。',
    tags: ['生活', '随笔'],
    content: [
      '我发现灵感不是“想出来”的，更多是“遇见”的。离开工位后，视角会变得更松弛。',
      '这次漫步我没有设路线，只是边走边记下看到的小细节：店门口的手写海报、路人的对话、傍晚的光。',
      '回到家把这些碎片整理后，反而更容易形成完整主题，也更能写出有温度的内容。',
      '给自己一点留白时间，很多创作问题都会在生活里找到答案。',
    ],
  },
];

function BlogListPage() {
  return (
    <div className="page">
      <header className="hero">
        <p className="badge">个人博客</p>
        <h1>{blogProfile.name}</h1>
        <p className="title">{blogProfile.title}</p>
        <p className="intro">{blogProfile.intro}</p>
      </header>

      <main className="content">
        <section className="panel">
          <h2>分类</h2>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </section>

        <section className="panel posts">
          <h2>最新文章</h2>
          {posts.map((post) => (
            <article className="post-card" key={post.id}>
              <div className="post-meta">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h3>
                <Link className="post-link" to={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              <p>{post.summary}</p>
              <div className="tags">
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

function PostDetailPage() {
  const { postId } = useParams();
  const post = posts.find((item) => item.id === Number(postId));

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page">
      <header className="hero">
        <p className="badge">文章阅读</p>
        <h1>{post.title}</h1>
        <p className="title">
          {post.category} · {post.date}
        </p>
        <p className="intro">点击下方按钮可返回文章列表继续阅读其他内容。</p>
      </header>

      <main className="content single-column">
        <article className="panel article-detail">
          <Link className="back-link" to="/">
            ← 返回文章列表
          </Link>
          <div className="tags">
            {post.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogListPage />} />
      <Route path="/posts/:postId" element={<PostDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
