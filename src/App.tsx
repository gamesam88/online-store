import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductPage from "./components/ProductPage/ProductPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
