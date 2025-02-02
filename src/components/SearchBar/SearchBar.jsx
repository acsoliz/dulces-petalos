import { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Search
      placeholder="Buscar productos..."
      value={searchTerm}
      onChange={handleChange}
      style={{ width: 300 }}
    />
  );
};

