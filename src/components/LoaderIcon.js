import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import anime from 'animejs';
import loaderSVG from './icons/loader.svg'; 

const LoaderIcon = () => {
  useEffect(() => {
    anime({
      targets: '#Capa_1 .cls-1',
      rotate: {
        value: '+=720deg', // Dos giros completos
        duration: 4000,
        easing: 'linear',
      },
      loop: true,
    });
  }, []);

  return <ReactSVG src={loaderSVG} />;
};

export default LoaderIcon;
