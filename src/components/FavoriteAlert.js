import React, { useEffect } from 'react';

const FavoriteAlert = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // La alerta se ocultará después de 3 segundos
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    visible && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-4 rounded-md z-50">
        <p className="text-white text-center">{message}</p>
      </div>
    )
  );
};

export default FavoriteAlert;
