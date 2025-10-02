import React from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./Components/HomePage/Header";
import Footer from "./Components/HomePage/Footer";
import BodyContent from "./Components/HomePage/Bodycontent";
import Menu from "./Components/MenuPage/Menu";
import Sidebar from "./Components/MenuPage/Sidebar";

import Blog from "./Components/BlogPage/Blog";
import Contact from "./Components/ContactPage/Contact";
import LoginPage from "./Components/LoginPage/LoginPage";
import NewLoginUser from "./Components/LoginPage/NewLoginUser";
import Cart from "./Components/CratPage/Cart";


import Dashboard from "./Components/DashboardPage/Dashboard"; 


import ProductProvider from "./Contexts/productContext/ProductProvider";
import CartProvider from "./Contexts/CartContext/CartProvider";
import SearchProvider from "./Contexts/SearchContext/SearchProvider";
import LoginProvider from "./Contexts/LoginContext/LoginProvider";
import BlogProvider from "./Contexts/BlogContext/BlogProvider"

const App = () => {
  return (
    <LoginProvider>
      <SearchProvider>
        <BlogProvider>
          <ProductProvider>
            <CartProvider>
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <BodyContent />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/Menu"
                  element={
                    <div className="flex bg-orange-50">
                      <Sidebar />
                      <Menu />
                    </div>
                  }
                />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Signup" element={<NewLoginUser />} />
                <Route path="/Cart" element={<Cart />} />

                <Route path="/Dashboard" element={<Dashboard />} />
              </Routes>
            </CartProvider>
          </ProductProvider>
        </BlogProvider>
      </SearchProvider>
    </LoginProvider>
  );
};

export default App;
