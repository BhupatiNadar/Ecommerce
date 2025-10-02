import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { TbBasketPlus } from "react-icons/tb";
import { ProductContext } from "../../Contexts/productContext/ProductProvider";
import { CartContext } from "../../Contexts/CartContext/CartProvider";
import { SearchContext } from "../../Contexts/SearchContext/SearchProvider"; 

const Menu = () => {
  const { products, loading, error } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  // Get the search and category state from the context
  const { searchInput, selectedCategories } = useContext(SearchContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  }; 
  // Filter the products based on search and selected categories
  const filteredProducts = products.filter((product) => {
    // 1. Filter by search input (checking product name)
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    // 2. Filter by selected categories
    // If no categories are selected, it's a match.
    // Otherwise, check if the product's category is in the selected list.
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.toLowerCase());

    // A product is shown only if it matches BOTH conditions
    return matchesSearch && matchesCategory;
  });

if (loading) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <p className="text-2xl font-semibold">Loading products...</p>
    </div>
  );
}

if (error) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <p className="text-2xl font-semibold text-red-500">Error: {error}</p>
    </div>
  );
}

  return (
    <div>
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 p-10">
          Our <span className="text-orange-500">Menu</span>
        </h1>
        {/* Important: Map over `filteredProducts` instead of `products` */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg p-5 text-center flex flex-col items-center relative transition-transform transform hover:-translate-y-2"
              >
                {/* ... The rest of your product card JSX remains exactly the same ... */}
                <img
                  src={`http://localhost:8080${product.imageUrl}`}
                  alt={product.name}
                  className="w-36 h-36 rounded-full object-cover -mt-16 border-4 border-white shadow-md"
                />
                <h3 className="text-lg font-bold text-gray-800 mt-4 h-12">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  {[...Array(5 - Math.floor(product.rating))].map((_, i) => (
                    <FaStar key={i} className="text-gray-300" />
                  ))}
                  <span className="font-bold text-sm ml-1">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-xl font-extrabold text-gray-800 mt-2">
                  ₹{product.price.toFixed(2)}
                </p>
                <div className="border-t border-gray-200 w-full my-4"></div>
                <div className="flex justify-around w-full text-sm text-gray-500">
                  <div className="text-center">
                    <p className="font-bold">Prep</p>
                    <p>{product.prepTime}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">Cook</p>
                    <p>{product.cookTime}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute -bottom-4 bg-orange-500 text-white rounded-full p-3 shadow-md hover:bg-orange-600 transition-colors"
                >
                  <TbBasketPlus size={24} />
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No products match your search.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Menu;
