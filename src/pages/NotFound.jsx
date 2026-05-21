import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="content single-column">
      <section className="panel article-detail">
        <h2>页面不存在</h2>
        <p>当前地址无对应页面，请返回首页继续浏览。</p>
        <Link className="back-link" to="/">
          ← 返回首页
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
