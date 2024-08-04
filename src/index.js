import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Crear un contenedor para la aplicación
const rootElement = document.getElementById('root');

// Usar createRoot para renderizar la aplicación
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
