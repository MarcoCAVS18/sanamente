import axios from 'axios';

const SHEET_ID = '1Ut9eRa7X0uiRB7eaqwK84SJgRC5EwuM-VJik5MidSBs';
const API_KEY = 'AIzaSyCwVDEYoC8EL3gKF9VRuM4FDIeyX7aERgM';
const BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/`;

// Función para obtener categorías
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Categories!A1:C1000?key=${API_KEY}`);
    console.log('Categories API Response:', response.data);
    
    // Verifica si hay datos
    if (response.data.values) {
      const categories = response.data.values.slice(1).map(row => ({
        id: row[0],
        name: row[1],
        imageUrl: row[2],
      }));
      console.log('Parsed Categories:', categories);
      return categories;
    } else {
      console.warn('No data found for categories.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// Función para obtener ofertas
export const fetchOffers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Offers!A1:B1000?key=${API_KEY}`);
    console.log('Offers API Response:', response.data);
    
    // Verifica si hay datos
    if (response.data.values) {
      const offers = response.data.values.slice(1).map(row => ({
        id: row[0],
        message: row[1],
      }));
      console.log('Parsed Offers:', offers);
      return offers;
    } else {
      console.warn('No data found for offers.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching offers:', error);
    return [];
  }
};

// Función para obtener productos
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Products!A1:I1000?key=${API_KEY}`);
    console.log('Products API Response:', response.data);
    
    // Verifica si hay datos
    if (response.data.values) {
      const products = response.data.values.slice(1).map(row => {
        let parsedPrices;
        try {
          console.log('Raw prices value:', row[8]); // Columna I para precios
          parsedPrices = JSON.parse(row[8] || '[]');
          console.log('Parsed prices:', parsedPrices);
        } catch (e) {
          console.error('Error parsing prices:', e);
          parsedPrices = [];
        }

        return {
          id: row[0],
          name: row[1],
          category: row[2],
          description: row[3],
          featured: row[4] === '*',
          promo: row[5],
          onlyPrice: row[6],
          imageUrl: row[7],
          prices: Array.isArray(parsedPrices) ? parsedPrices : [],
        };
      });
      console.log('Parsed Products:', products);
      return products;
    } else {
      console.warn('No data found for products.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
