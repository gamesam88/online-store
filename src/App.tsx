import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
