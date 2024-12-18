import { Route, Routes } from 'react-router-dom';
import AuthCallBackPage from './pages/AuthCallBackPage';
import HomePage from './pages/HomePage';
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import MainLayout from './layout/MainLayout';
import ChatPage from './pages/ChatPage';
import AlbumPage from './pages/AlbumPage';
import AdminPage from './pages/admin/AdminPage';
import { Toaster } from 'react-hot-toast';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={<AuthenticateWithRedirectCallback />}
        />
        <Route path="/auth-callback" element={<AuthCallBackPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
