import axios from 'axios';

const SHEET_ID = '1Ut9eRa7X0uiRB7eaqwK84SJgRC5EwuM-VJik5MidSBs';
const API_KEY = 'AIzaSyCwVDEYoC8EL3gKF9VRuM4FDIeyX7aERgM';
const BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/`;

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Categories!A1:C100?key=${API_KEY}`);
    console.log('Categories Response:', response.data); // Agrega un log aquí
    const categories = response.data.values.slice(1).map(row => ({
      id: row[0],
      name: row[1],
      imageUrl: row[2],
    }));
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Products!A1:I100?key=${API_KEY}`); // Asegúrate de que el rango cubre hasta la columna `prices`
    console.log('Products Response:', response.data); // Agrega un log aquí
    const products = response.data.values.slice(1).map(row => {
      let parsedPrices;
      try {
        console.log('Raw prices value:', row[8]); // Columna I para precios

        // Asegúrate de que el contenido de row[8] sea un JSON válido
        parsedPrices = JSON.parse(row[8] || '[]');
        console.log('Parsed prices:', parsedPrices);
      } catch (e) {
        console.error('Error parsing prices:', e);
        parsedPrices = []; // Valor predeterminado en caso de error
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
        prices: Array.isArray(parsedPrices) ? parsedPrices : [], // Array vacío en caso de error
      };
    });

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
