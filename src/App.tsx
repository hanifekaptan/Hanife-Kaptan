import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageLayout from './components/layout/PageLayout/PageLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PostDetailPage from './pages/PostDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:postId" element={<PostDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;