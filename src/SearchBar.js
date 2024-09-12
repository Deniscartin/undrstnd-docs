import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Logica di ricerca può essere aggiunta qui
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search documentation..."
        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default SearchBar;
