import React from "react";
import "./productCard.scss";
import { AddProductToCart } from "../addProductToCart/addProductToCard";
import { ProductType } from "../../models/models";
import { Link } from "react-router-dom";
interface IProductProps {
  product: ProductType;
  id: number;
}

export function ProductCard({ product, id }: IProductProps) {
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
        <div className="card">
          <img src={product.thumbnail} alt={product.title} className="card-image" />
          <h4>{product.title}</h4>
          <div>
            <p>
              Цена: <span className="font-bold">{product.price} $</span>
            </p>
            <p>
              Рейтинг: <span style={{ fontWeight: "bold" }}>{product.rating}</span>
            </p>
            <p>
              Скидка: <span style={{ fontWeight: "bold" }}>{product.discountPercentage} %</span>
            </p>
            <p>
              На складе: <span style={{ fontWeight: "bold" }}>{product.stock} шт</span>
            </p>
          </div>
          <div className="card__btns-block">
            <button className="btn btnStyle btn__addToCart">
              {" "}
              <Link to={`product/${id}`}>
                {" "}
                <span>О товаре</span>
              </Link>
            </button>
            <AddProductToCart cartItem={cartItem} />
          </div>
        </div>
      }
    </div>
  );
}
