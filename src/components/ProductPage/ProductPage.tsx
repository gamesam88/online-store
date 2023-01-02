import React, { FC, useEffect, useState } from "react";
import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../models/models";

const ProductPage: FC = () => {
  const { id } = useParams();
  const [prod, setProd] = useState<ProductType>();

  console.log(prod);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => setProd(response.data));
  }, [id]);

  return (
    <>
      {prod && (
        <div className="productPage">
          <div className="productPage__container">
            <h1>{prod.title}</h1>
            <h2>{prod.description}</h2>
            <img src={prod.thumbnail} alt={prod.title} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
