import { useState, useEffect } from 'react';
import { getProducts } from '@/services/api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return { products };
};


