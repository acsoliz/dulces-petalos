import { SearchBar, ProductList } from '@/components/';
import { useProducts, useSearch } from '@/hooks';
import './HomePage.css';

export const HomePage = () => {
  const { products } = useProducts();
  const { filteredProducts, handleSearch } = useSearch(products);

  return (
    <div className="home-page">
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />

      </div>
      <div className="product-list">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};