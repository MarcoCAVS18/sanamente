// src/data/products.js
import imageFrutos from '../images/Frutos secos.png'
import arroz from '../images/Arroz yamani.png'
import mix from '../images/Mix con pasas.png'

const products = [
  {
    id: 1,
    name: 'Almendras',
    category: 'Frutos secos',
    description: 'Precios por cantidad',
    imageUrl: imageFrutos, 
    prices: [
      { type: '100 gramos', price: '1.200' },
      { type: '250 gramos', price: '2.000' },
      { type: '500 gramos', price: '4.000' },
      { type: '1 kilogramo', price: '8.000' },
    ],
  },
  {
    id: 2,
    name: 'Yogurt Griego',
    category: 'Congelados',
    description: 'Precios por unidad',
    imageUrl: mix, 
    prices: [
      { type: '100 gramos', price: '1.200' },
      { type: '250 gramos', price: '2.000' },
      { type: '500 gramos', price: '4.000' },
      { type: '1  kilogramos', price: '8.000' },
    ],
  },
  {
    id: 3,
    name: 'Mix Frutal',
    category: 'Frutos secos',
    description: 'Precios por cantidad',
    imageUrl: arroz, 
    prices: [
      { type: 'Pequeño', price: '12.00' },
      { type: 'Mediano', price: '18.00' },
      { type: 'Grande', price: '24.00' },
    ],
  },
  {
    id: 4,
    name: 'Mix Frutal',
    category: 'Frutos secos',
    description: 'Precios por cantidad',
    imageUrl: arroz, 
    prices: [
      { type: 'Pequeño', price: '12.00' },
      { type: 'Mediano', price: '18.00' },
      { type: 'Grande', price: '24.00' },
    ],
  },
];

export default products;
