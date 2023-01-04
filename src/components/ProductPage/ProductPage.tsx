import React, { FC, useEffect, useState } from "react";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../models/models";
import { AddProductToCart } from "../addProductToCart/addProductToCard";

const ProductPage: FC = () => {
  const { id } = useParams();
  const [prod, setProd] = useState<ProductType>();

  const [mainImg, setMainImg] = useState<string>();

  const cartItem = prod && {
    title: prod.title,
    image: prod.thumbnail,
    rating: prod.rating,
    price: prod.price,
    stock: prod.stock,
    description: prod.description,
    discountPercentage: prod.discountPercentage,
    id: prod.id,
  };

  useEffect(() => {
    setMainImg(prod?.thumbnail);
  }, [prod]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => setProd(response.data));
  }, [id]);

  return (
    <>
      {prod && (
        <div className="productPage">
          <div className="productPage__container">
            <div className="productPage__images-block">
              <div className="side-images">
                {prod.images.map((el: string, id: number) => (
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
              <h2>{prod.title}</h2>
              <h3>{`Цена: ${prod.price} $`}</h3>
              <h3>О товаре: </h3>
              <p>{prod.description}</p>
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
