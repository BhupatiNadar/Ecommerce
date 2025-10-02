// src/Components/MenuPage/Sidebar.js
import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../../Contexts/SearchContext/SearchProvider";

const categories = ["Curry", "Pizza", "Rice", "Desserts", "Drinks", "Fruits"];

const Sidebar = () => {
  // Get all the necessary values from the context
  const {
    searchInput,
    setSearchInput,
    selectedCategories,
    setSelectedCategories,
  } = useContext(SearchContext);

  // This function will run when a checkbox is clicked
  const handleCategoryChange = (category) => {
    const categoryLower = category.toLowerCase();

    // Check if the category is already in the array
    if (selectedCategories.includes(categoryLower)) {
      // If it is, remove it (this is for unchecking)
      setSelectedCategories(
        selectedCategories.filter((c) => c !== categoryLower)
      );
    } else {
      // If it's not, add it to the array (this is for checking)
      setSelectedCategories([...selectedCategories, categoryLower]);
    }
  };

  return (
    <div className="w-64 bg-white flex flex-col rounded-xl shadow-lg p-6 space-y-8 mx-1.5 mt-2">
      {/* Text Search Input */}
      <div>
        <label
          htmlFor="search"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Search
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-400" />
          </span>
          <input
            id="search"
            type="search"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>

      {/* Sorting (remains the same) */}
      <div>
        <label
          htmlFor="sort-by"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Sort By Price
        </label>
        <select
          id="sort-by"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="relevant">Relevant</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      {/* Categories Checkboxes */}
      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">Categories</h3>
        <div className="flex flex-col gap-3">
          {categories.map((category, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-5 h-5 accent-orange-500"
                // Check if the current category is in our state array
                checked={selectedCategories.includes(category.toLowerCase())}
                // Call our handler function on change
                onChange={() => handleCategoryChange(category)}
              />
              <span className="text-gray-700 font-medium group-hover:text-orange-600">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
