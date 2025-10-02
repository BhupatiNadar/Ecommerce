import React, { useState, useEffect } from "react";


import PokeBowl from "../../assets/Product/pokebowl.png";
import Burger from "../../assets/Product/Burger.png";
import Chessburger from "../../assets/Product/ChessBurger.png";


import { FaStar } from "react-icons/fa";
import { TbBasketPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

import { useContext } from "react";

import { ProductContext } from "../../Contexts/productContext/ProductProvider";
import { CartContext } from "../../Contexts/CartContext/CartProvider";

const BodyContent = () => {

  const [startIndex, setStartIndex] = useState(0);

  const { addToCart } = useContext(CartContext);

   const { products, loading, error } = useContext(ProductContext);

  useEffect(() => {
    if (products.length === 0) return; 

    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const getDisplayedProducts = () => {
    if (products.length === 0) return []; 

    const displayed = [];
    const numProductsToShow = 5;
    for (let i = 0; i < numProductsToShow; i++) {
      const index = (startIndex + i) % products.length;
      displayed.push(products[index]);
    }
    return displayed;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const displayedProducts = getDisplayedProducts();

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
    <section className="bg-orange-50 w-full px-4 sm:px-8 lg:px-16 py-16">

      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg text-gray-600">Fresh Bites for Every Mood</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mt-2">
            GET MORE <span className="text-orange-500">FOR LESS</span> - 25%
            OFF!
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            on Rice & Curries
          </h2>
          <div className="mt-6 flex items-baseline gap-2">
            <p className="text-lg text-gray-600">Starting From</p>
            <p className="text-4xl font-extrabold text-orange-500">
              ₹299<span className="text-2xl">.99</span>
            </p>
          </div>
          <Link
            to="/Menu"
            className="mt-8 bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors shadow-lg"
          >
            Shop Now
          </Link>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
          <img
            src={PokeBowl}
            alt="Poke Bowl"
            className="w-full max-w-lg rounded-full "
          />
          <div className="absolute top-0 right-0 sm:right-10 transform translate-x-1/4 -translate-y-1/4">
            <div className="bg-yellow-300 rounded-full w-28 h-28 flex flex-col items-center justify-center text-center p-2 shadow-xl -rotate-12">
              <span className="font-bold text-gray-800">Special</span>
              <span className="text-4xl font-extrabold text-orange-600">
                15%
              </span>
              <span className="font-bold text-gray-800">Discount</span>
            </div>
          </div>
          <div className="absolute bottom-10 -left-4 sm:-left-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-3 flex items-center gap-3 w-60 object-cover transition-transform duration-300 hover:scale-105">
            <img
              src={Burger}
              alt="Poached Zumboo Burger"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <p className="font-bold text-gray-800">Poached Zumboo Burger</p>
              <p className="text-sm text-gray-500">10min cooking time</p>
              <p className="text-lg font-bold text-orange-500 mt-1">₹120.00</p>
            </div>
          </div>
          <div className="absolute bottom-[-40px] right-0 sm:right-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-3 flex items-center gap-3 w-60 object-cover transition-transform duration-300 hover:scale-105">
            <img
              src={Chessburger}
              alt="Classic Cheese Burger"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <p className="font-bold text-gray-800">Classic Cheese Burger</p>
              <p className="text-sm text-gray-500">8min cooking time</p>
              <p className="text-lg font-bold text-orange-500 mt-1">₹99.9</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-28">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            NEW <span className="text-orange-500">ARRIVALS</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Discover fresh foods that delight your taste, nourish your body, and
            bring joy to every meal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-5 text-center flex flex-col items-center relative transition-transform transform hover:-translate-y-2"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
