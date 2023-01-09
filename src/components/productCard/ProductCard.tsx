import React from "react";
import { useState } from "react";
import "./productCard.scss";
import { AddProductToCart } from "../addProductToCart/addProductToCard";
import { ProductType } from "../../models/models";
import { Link } from "react-router-dom";

interface IProductProps {
  product: ProductType;
  id: number;
}

export function ProductCard({ product, id }: IProductProps) {
  const [details, setDetails] = useState(false);

  const btnClassName = details ? "add-yellow" : "add-blue";
  const btnClasses = ["btn-class", btnClassName];

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

  return (
    <div>
      {
        <div className="card ">
          <Link to={`product/${id}`}>
            <img src={product.thumbnail} alt={product.title} className="card-image" />
            <p>{product.title}</p>
          </Link>
          <span className="font-bold">{product.price}$</span>
          <button className={btnClasses.join(" ")} onClick={() => setDetails((prev) => !prev)}>
            {details ? "Hide details" : "Show details"}
          </button>
          {details && (
            <div>
              <p>{product.description}</p>
              <p>
                Rate: <span style={{ fontWeight: "bold" }}>{product.rating}</span>
              </p>
            </div>
          )}
          <AddProductToCart cartItem={cartItem} />
        </div>
      }
    </div>
  );
}
