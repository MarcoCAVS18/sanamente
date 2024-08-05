import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import SocialMedia from './components/SocialMedia';
import CerealesPage from './page/CerealesPage';
import FrutosSecosPage from './page/FrutosSecosPage';
import GalletitasPage from './page/GalletitasPage';
import GranosPage from './page/GranosPage';
import ProductosLacteosPage from './page/ProductosLacteosPage';
import SnacksPage from './page/SnacksPage';

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
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/cereales" element={<CerealesPage />} />
            <Route path="/frutos-secos" element={<FrutosSecosPage />} />
            <Route path="/galletitas" element={<GalletitasPage />} />
            <Route path="/granos" element={<GranosPage />} />
            <Route path="/productos-lacteos" element={<ProductosLacteosPage />} />
            <Route path="/snacks" element={<SnacksPage />} />
          </Routes>
        </main>
        <SocialMedia />
        <ContactButton show={showContactButton} />
        <Footer ref={footerRef} />
      </div>
    </Router>
  );
}

export default App;
