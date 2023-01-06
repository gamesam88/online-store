import React, { FC, useEffect, useState } from "react";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../models/models";
import { AddProductToCart } from "../addProductToCart/addProductToCard";

const ProductPage: FC = () => {
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
    setMainImg(product?.thumbnail);
  }, [product]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => setProd(response.data));
  }, [id]);

  return (
    <>
      {product && (
        <div className="productPage">
          <div className="productPage__container">
            <div className="productPage__images-block">
              <div className="side-images">
                {product.images.map((el: string, id: number) => (
                  <img
                    src={el}
                    key={id}
                    alt="image"
                    onClick={() => {
                      setMainImg(el);
                    }}
                  ></img>
                ))}
              </div>
              <img src={mainImg} alt="image" />
            </div>
            <div className="productPage__text-block">
              <h2>{product.title}</h2>
              <h3>{`Цена: ${product.price} $`}</h3>
              <h3>О товаре: </h3>
              <p>{product.description}</p>
              <div className="buttons-block">
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
