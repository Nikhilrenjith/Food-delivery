import React from "react";
import "./product.css";
const Products = (props) => {
  const { title, imgUrl, price } = props.item;

  return (
    <div className="single-product">
      <div className="product-img">
        <img src={imgUrl} alt=" Loading" className="w-100" />
      </div>
      <div className="product-content">
        <div className="rating text-center">
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
        </div>
        <h6>{title}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            Price : $ <span>{price}</span>
          </span>
          <span className="shopping-icon">
            <i class="ri-shopping-cart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;
