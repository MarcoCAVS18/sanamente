import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import SocialMedia from './components/SocialMedia';
import CategoryPage from './page/CategoryPage';
import AllPage from './page/AllPage';
import OffersPage from './page/OffersPage';
import TopNav from './components/TopNav';
import FavoritePage from './page/FavoritePage';
import LoadingScreen from './page/LoadingScreen';

function App() {
  const footerRef = useRef(null);
  const [showContactButton, setShowContactButton] = useState(true);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    // Simula la carga de datos o recursos
    const loadData = async () => {
      try {
        // Simula la carga de datos, recursos o componentes
        await Promise.all([
          fetch('/api/initial-data'), // Ejemplo de llamada a API
          new Promise(resolve => setTimeout(resolve, 2000)), // Simula un retraso de 2 segundos
        ]);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="App flex flex-col min-h-screen">
      {loading ? (
        <LoadingScreen /> // Muestra la pantalla de carga mientras se está cargando
      ) : (
        <>
          <div className="container mx-auto px-4 md:px-8">
            <TopNav />
            <div className="content flex-grow">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<MainContainer />} />
                  <Route path="/category/:category" element={<CategoryPage />} />
                  <Route path="/all" element={<AllPage />} />
                  <Route path="/offers" element={<OffersPage />} />
                  <Route path="/favorite" element={<FavoritePage />} />
                </Routes>
              </main>
              <span className="w-full border-t border-gray-500 mb-4"></span>
              <SocialMedia />
              <ContactButton show={showContactButton} />
              <Footer ref={footerRef} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
