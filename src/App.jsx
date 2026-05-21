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
  },
  {
    id: 2,
    title: '我常用的 5 个高效学习方法',
    date: '2026-05-10',
    category: '学习笔记',
    summary:
      '分享我在学习新技术时最常用的 5 个方法，包括费曼学习法、主题拆分与间隔复习。',
    tags: ['学习方法', '成长'],
  },
  {
    id: 3,
    title: '周末城市漫步：在慢节奏里找灵感',
    date: '2026-05-03',
    category: '生活记录',
    summary:
      '远离屏幕半天，去街头走走看看。很多内容灵感，其实都来自生活本身。',
    tags: ['生活', '随笔'],
  },
];

function App() {
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
              <h3>{post.title}</h3>
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

export default App;
