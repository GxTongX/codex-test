import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/posts';

function PostDetail() {
  const { postId } = useParams();
  const normalizedPostId = Number(postId);
  const activePost = posts.find((post) => post.id === normalizedPostId);

  if (!activePost) {
    return (
      <main className="content single-column">
        <section className="panel article-detail">
          <h2>文章不存在</h2>
          <p>你访问的文章未找到，请返回列表查看其他内容。</p>
          <Link className="back-link" to="/">
            ← 返回文章列表
          </Link>
        </section>
      </main>
    );
  }

  return (
    <>
      <header className="hero">
        <p className="badge">文章阅读</p>
        <h1>{activePost.title}</h1>
        <p className="title">
          {activePost.category} · {activePost.date}
        </p>
        <p className="intro">点击下方按钮可返回文章列表继续阅读其他内容。</p>
      </header>

      <main className="content single-column">
        <article className="panel article-detail">
          <Link className="back-link" to="/">
            ← 返回文章列表
          </Link>
          <div className="tags">
            {activePost.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          {activePost.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </main>
    </>
  );
}

export default PostDetail;
