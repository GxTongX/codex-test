import { Route, Routes } from 'react-router-dom';
import BlogHome from '../pages/BlogHome';
import NotFound from '../pages/NotFound';
import PostDetail from '../pages/PostDetail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BlogHome />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
