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
    const response = await axios.get(`${BASE_URL}Products!A1:H100?key=${API_KEY}`);
    console.log('Products Response:', response.data); // Agrega un log aquí
    const products = response.data.values.slice(1).map(row => {
      let parsedPrices;
      try {
        console.log('Raw prices value:', row[7]); // Columna H

        parsedPrices = JSON.parse(row[7] || '[]');
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
        promo: row[4],
        onlyPrice: row[5],
        imageUrl: row[6], // Ahora corresponde a la columna G (imagen)
        prices: Array.isArray(parsedPrices) ? parsedPrices : [], // Ahora corresponde a la columna H (prices)
      };
    });

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};