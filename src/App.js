// src/App.js
import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import SocialMedia from './components/SocialMedia';
import CategoryPage from './page/CategoryPage';
import TopNav from './components/TopNav';
import FavoritePage from './page/FavoritePage';

function App() {
  const footerRef = useRef(null);
  const [showContactButton, setShowContactButton] = useState(true);

  useEffect(() => {
    const currentFooterRef = footerRef.current;

    if (currentFooterRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setShowContactButton(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(currentFooterRef);

      return () => {
        observer.unobserve(currentFooterRef);
      };
    }
  }, [footerRef]);

  return (
    <div className="App flex flex-col min-h-screen">
      <TopNav />
      <div className="content flex-grow">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/all" element={<CategoryPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </main>
        <SocialMedia />
        <ContactButton show={showContactButton} />
        <Footer ref={footerRef} />
      </div>
    </div>
  );
}

export default App;
