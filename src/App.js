import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ExploreFeedPage from './pages/ExploreFeedPage';
import ReelsPage from './pages/ReelsPage';
import ProfilePage from './pages/ProfilePage';
import MessagesPage from './pages/MessagesPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NewPostPage from './pages/NewPostPage';
import CommentsPage from './pages/CommentsPage';
import StoriesPage from './pages/StoriesPage';
import NewStoryPage from './pages/NewStoryPage';
import PostStoryPage from './pages/PostStoryPage';
import EditUserPage from './pages/EditUserPage';
import './App.scss';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore-feed" element={<ExploreFeedPage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/new-post" element={<NewPostPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/new-story" element={<NewStoryPage />} />
          <Route path="/post-story" element={<PostStoryPage />} />
          <Route path="/edit-user" element={<EditUserPage />} />

          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
