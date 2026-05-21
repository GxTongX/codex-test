import { Link } from 'react-router-dom';
import { blogProfile, categories, posts } from '../data/posts';

function BlogHome() {
  return (
    <>
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
    </>
  );
}

export default BlogHome;
