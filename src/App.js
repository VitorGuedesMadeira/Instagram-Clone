import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ReelsPage from './pages/ReelsPage';
import ShopPage from './pages/ShopPage';
import ProfilePage from './pages/ProfilePage';
import MessagesPage from './pages/MessagesPage';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
