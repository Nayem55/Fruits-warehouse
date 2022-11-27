import React from "react";
import { useNavigate } from "react-router-dom";
import './Product.css'

const Product = ({ product }) => {
    const navigate = useNavigate();
    const {img} = product;
  return (
    <div>
      <div className="Product">
        <h3>{product.title}</h3>
        <img src={img} alt="" />
        <p>price: {product.price}/kg</p>
        <p>In stock: {product.stock} kgs</p>
        <button onClick={()=>navigate('/manage')}>
          Manage inventory
        </button>
      </div>
    </div>
  );
};

export default Product;
