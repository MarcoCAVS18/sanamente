import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import SocialMedia from './components/SocialMedia';
import CategoryPage from './page/CategoryPage';
import TopNav from './components/TopNav';
import FavoritePage from './page/FavoritePage'; // Asegúrate de importar FavoritePage

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
        <TopNav /> {/* Agrega el TopNav aquí */}
        <div className="mt-12"> {/* Ajuste de margen superior */}
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/favorite" element={<FavoritePage />} /> {/* Nueva ruta */}
            </Routes>
          </main>
          <SocialMedia />
          <ContactButton show={showContactButton} />
          <Footer ref={footerRef} />
        </div>
      </div>
    </Router>
  );
}

export default App;
