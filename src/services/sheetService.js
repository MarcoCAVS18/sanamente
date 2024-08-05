// src/services/sheetService.js
import axios from 'axios';

const SHEET_ID = '1Ut9eRa7X0uiRB7eaqwK84SJgRC5EwuM-VJik5MidSBs'; // Reemplaza con el ID de tu hoja
const API_KEY = 'AIzaSyCwVDEYoC8EL3gKF9VRuM4FDIeyX7aERgM';
const BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/`;

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Categories!A1:C100?key=${API_KEY}`);
    const categories = response.data.values.slice(1).map(row => ({
      id: row[0],
      name: row[1],
      imageUrl: row[2],
    }));
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}Products!A1:E100?key=${API_KEY}`);
    const products = response.data.values.slice(1).map(row => ({
      id: row[0],
      name: row[1],
      category: row[2],
      description: row[3],
      imageUrl: row[4],
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
