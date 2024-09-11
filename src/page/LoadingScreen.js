import React from 'react';
import { ReactSVG } from 'react-svg';
import loaderSVG from '../components/icons/loader.svg'; // Ruta a tu SVG

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
    <ReactSVG
      src={loaderSVG}
      className="w-32 h-32 animate-spin" // Ajusta el tamaño y usa la animación de rotación
    />
  </div>
);

export default LoadingScreen;

