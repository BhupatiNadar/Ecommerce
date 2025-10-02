import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Company/Logo.png";
import { LuUserRound } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { TbBasketCheck } from "react-icons/tb"; 
import { CartContext } from "../../Contexts/CartContext/CartProvider";
import { LoginContext } from "../../Contexts/LoginContext/LoginProvider";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(LoginContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const { cartItems } = useContext(CartContext);

  const numOfProduct = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    setLoggedInUser(null);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <header className="w-full bg-orange-50 shadow-md px-2 py-1 flex justify-between items-center md:grid md:grid-cols-3">
        <div className="justify-self-start rounded-lg">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-30 h-auto rounded-lg"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 justify-self-center">
          <Link
            to="/"
            className="text-gray-600 font-semibold hover:text-orange-500 transition-colors"
          >
            HOME
          </Link>
          <Link
            to="/Menu"
            className="text-gray-600 font-semibold hover:text-orange-500 transition-colors"
          >
            MENU
          </Link>
          <Link
            to="/Blog"
            className="text-gray-600 font-semibold hover:text-orange-500 transition-colors"
          >
            BLOG
          </Link>
          <Link
            to="/Contact"
            className="text-gray-600 font-semibold hover:text-orange-500 transition-colors"
          >
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center gap-6 justify-self-end mr-4">
          {loggedInUser && loggedInUser.role === "admin" && (
            <div>
              <Link
                to="/Dashboard"
                className="font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-200 border-b-2 border-transparent hover:border-orange-500 pb-1"
              >
                Dashboard
              </Link>
            </div>
          )}

          <div className="relative cursor-pointer">
            <Link to="/Cart">
              <TbBasketCheck className="text-3xl text-gray-700 hover:text-orange-500 transition-colors" />
            </Link>
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {numOfProduct}
            </span>
          </div>
          
          {loggedInUser ? (
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-orange-100 p-2 text-orange-600 transition-all duration-300 hover:bg-orange-200 hover:ring-4 hover:ring-orange-100"
              >
                <FaUserCircle className="text-2xl" />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 py-2 ring-1 ring-black ring-opacity-5">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="flex items-center gap-2 bg-orange-500 text-white font-bold py-1 px-5 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-105">
              <Link to="/Login" className="flex items-center gap-2">
                Login
                <LuUserRound className="text-xl" />
              </Link>
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
