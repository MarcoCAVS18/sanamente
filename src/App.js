// src/App.js
import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import SocialMedia from './components/SocialMedia';
import CategoryPage from './page/CategoryPage';
import AllPage from './page/AllPage'; 
import OffersPage from './page/OffersPage'; // Importa el nuevo componente
import TopNav from './components/TopNav';
import FavoritePage from './page/FavoritePage';

function App() {
  const footerRef = useRef(null);
  const [showContactButton, setShowContactButton] = useState(true);
  const location = useLocation();

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

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la vista hacia arriba cuando cambia la ruta
  }, [location]);

  return (
    <div className="App flex flex-col min-h-screen">
      <TopNav />
      <div className="content flex-grow">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/all" element={<AllPage />} />
            <Route path="/offers" element={<OffersPage />} /> {/* Nueva ruta para OffersPage */}
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
