// src/App.js
import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import SocialMedia from './components/SocialMedia'; // Importa el nuevo componente

function App() {
  const footerRef = useRef(null);
  const [showContactButton, setShowContactButton] = useState(true);

  useEffect(() => {
    if (footerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setShowContactButton(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(footerRef.current);

      // Función de limpieza para detener la observación cuando el componente se desmonta
      return () => {
        observer.unobserve(footerRef.current);
      };
    }
  }, [footerRef]);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <MainContainer />
      </main>
      <SocialMedia /> 
      {showContactButton && <ContactButton />}
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
