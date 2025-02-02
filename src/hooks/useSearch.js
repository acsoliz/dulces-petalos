import { useState, useEffect } from 'react';

export const useSearch = (products) => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (searchTerm) => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.binomialName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    return { filteredProducts, handleSearch };
};

