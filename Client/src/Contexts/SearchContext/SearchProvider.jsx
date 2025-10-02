// src/Components/SearchContext/SearchProvider.js
import React, { createContext, useState } from "react";

// The context itself
// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

// The provider component
const SearchProvider = ({ children }) => {
  // State for the text search input
  const [searchInput, setSearchInput] = useState("");
  // State for the selected categories (an array of strings)
  const [selectedCategories, setSelectedCategories] = useState([]);

  // The value that will be available to all consuming components
  const value = {
    searchInput,
    setSearchInput,
    selectedCategories,
    setSelectedCategories,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
