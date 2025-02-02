import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProducts = async () => {
    try {
      const response = await api.get('/product');
      return response.data;
    } catch (error) {
      console.error('Error fetching products::', error);
      throw error;
    }
  };

export const getProductById = async (id) => {
    try {
        const response = await api.get(`/product/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product::', error);
        throw error;
    }
};
