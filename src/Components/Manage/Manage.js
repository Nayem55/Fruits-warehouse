import React from "react";
import useProducts from "../../CustomHooks/UseProducts";
import "./Manage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Manage = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  let total = 0;
  products.forEach((product) => {
    total = total + product.stock * product.price;
  });
  return (
    <div className="manage">
      <div className="d-flex justify-content-between mb-5">
        <input className="search" type="text" name="" id="" placeholder="Serach item" />
        <button onClick={()=>navigate('/addproduct')} className="add">Add Product</button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th className="serial" scope="row">
                {products.indexOf(product) + 1}
              </th>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.stock} kgs</td>
              <td>{product.stock * product.price}</td>
              <td className="status">In stock</td>
              <td className="action">
                <FontAwesomeIcon
                  className="edit"
                  icon={faPenToSquare}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="delete"
                  icon={faTrash}
                ></FontAwesomeIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <div className="text-center">
          <p className="mb-0">Total Items</p>
          <p className="fs-5">{products.length}</p>
        </div>
        <div className="text-center">
          <p className="mb-0">Total Value</p>
          <p className="fs-5">${total}</p>
        </div>
        <div className="text-center">
          <p className="mb-0"> Out Of Stock </p>
          <p className="fs-5">0</p>
        </div>
      </div>
    </div>
  );
};

export default Manage;
