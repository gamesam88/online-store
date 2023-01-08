import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductPage from "./components/ProductPage/ProductPage";
import NotFound from "./components/NotFound/NotFound";
import ModalWindow from "./components/modalWindow/ModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { setModalState } from "./redux/slices/productsSlice";

function App() {
  const modalState = useSelector((state: RootState) => state.products.modal);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(modalState);
  }, [modalState]);

  const handleModal = (e: Event) => {
    if (!(e.target instanceof HTMLElement) || !(e.currentTarget instanceof HTMLElement)) return;
    const target = e.target;
    if (target.classList.contains("modal-wrapper")) {
      dispatch(setModalState(false));
    }
  };

  useEffect(() => {
    const modalWrapper = document.querySelector(".modal-wrapper");
    modalWrapper?.addEventListener("click", handleModal);
    return () => {
      modalWrapper?.removeEventListener("click", handleModal);
    };
  }, []);

  return (
    <div className="app">
      <ModalWindow modal={!modal ? "modal-wrapper__block" : ""} />
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
