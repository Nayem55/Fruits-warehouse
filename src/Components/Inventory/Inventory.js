import React from "react";
import useProducts from "../../CustomHooks/UseProducts";
import Product from "../Product/Product";
import "./Inventory.css";

const Inventory = () => {
  const [products] = useProducts();
  console.log(products)
  if(products.length === 0){
    setTimeout(()=>window.location.reload(),20000)
}
  return (
    <div className={`${products.length > 0 ? "Inventory" : ""}`}>
      {products.map((product) => (
        <Product product={product} />
      ))}
      <div className={`${products.length === 0 ? "alert" : "d-none"}`}>
        {products.length === 0 && (
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
