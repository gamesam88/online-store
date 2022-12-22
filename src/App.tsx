import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import { Catalog } from './components/catalog/Catalog';

function App() {
  return (
    <div className="app">
      <Header />
      <Catalog />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
