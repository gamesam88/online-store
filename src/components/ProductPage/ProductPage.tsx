import React, { FC, useEffect, useState } from "react";
import "./ProductPage.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../models/models";
import { AddProductToCart } from "../addProductToCart/addProductToCard";
import { useDispatch } from "react-redux";
import { setModalState } from "../../redux/slices/productsSlice";
import { addProduct } from "../../redux/slices/cartSlice";

const ProductPage: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProd] = useState<ProductType>();
  const [mainImg, setMainImg] = useState<string>();

  const cartItem = product && {
    title: product.title,
    image: product.thumbnail,
    rating: product.rating,
    price: product.price,
    stock: product.stock,
    description: product.description,
    discountPercentage: product.discountPercentage,
    id: product.id,
  };

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => setProd(response.data));
  }, [id]);

  useEffect(() => {
    setMainImg(product?.thumbnail);
  }, [product]);

  return (
    <>
      {product && (
        <div className="productPage">
          <div className="crambs">
            <span>
              <Link to="/online-store">Catalog</Link>
            </span>

            <span>{product.category}</span>
            <span>{product.brand}</span>
            <span>{product.title}</span>
          </div>
          <div className="productPage__container">
            <div className="productPage__images-block">
              <div className="side-images">
                {product.images.map((el: string, id: number) => (
                  <div key={id} className="side-images__wrapper">
                    <img
                      src={el}
                      alt="image"
                      onClick={() => {
                        setMainImg(el);
                      }}
                    ></img>
                  </div>
                ))}
              </div>
              <div className="productPage__main-image">
                <img src={mainImg} alt="image" />
              </div>
            </div>
            <div className="productPage__text-block">
              <h2>{product.title}</h2>
              <h3>{`Цена: ${product.price} $`}</h3>
              <h3>
                О товаре: <span>{product.description}</span>
              </h3>
              <h3>
                Рейтинг: <span>{product.rating}</span>
              </h3>
              <h3>
                Скидка: <span>{product.discountPercentage}</span>
              </h3>
              <h3>
                Категория: <span>{product.category}</span>
              </h3>
              <h3>
                Бренд: <span>{product.brand}</span>
              </h3>
              <div className="buttons-block">
                <button
                  className="btnStyle"
                  onClick={() => {
                    if (cartItem) {
                      dispatch(addProduct({ cartItem: cartItem, amount: 1 }));
                    }
                    dispatch(setModalState(true));
                  }}
                >
                  <Link to="/online-store/cart">
                    <span>Купить сейчас</span>
                  </Link>
                </button>
                <AddProductToCart cartItem={cartItem} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
