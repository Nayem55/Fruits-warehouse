import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import useProducts from "../../CustomHooks/UseProducts";
import auth from "../../firebase_init";
import "./AddProduct.css";
import emptyImage from "./no-image-icon-6.png";

const AddProduct = ({editId,setEditId }) => {
  const [products] = useProducts();
  const [previewSource, setPreviewSource] = useState("");
  const navigate= useNavigate();
  const user = useAuthState(auth);
  let editedProduct = products.find((product) => product._id === editId);
  if(editedProduct){
    document.getElementById("title").defaultValue = editedProduct.title;
    document.getElementById("stock").defaultValue = editedProduct.stock;
    document.getElementById("price").defaultValue = editedProduct.price;
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const title = e.target.name.value;
    const img = previewSource;
    const stock = e.target.amount.value;
    const price = e.target.price.value;
    const email = e.target.email.value;
    let newProduct = {
      title: title,
      img: img,
      stock: stock,
      price: price,
      email: email,
    };
    fetch("http://localhost:5000/products", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.target.reset();
    setPreviewSource("  ")
  };

  const handleUpdate=(e)=>{
    e.preventDefault();
    const title = e.target.name.value;
    const img = previewSource ? previewSource : editedProduct.img;
    const stock = e.target.amount.value;
    const price = e.target.price.value;
    const email = e.target.email.value;
    let updatedProduct = {
      _id:editedProduct._id,
      title: title,
      img: img,
      stock: stock,
      price: price,
      email: email,
    };
    fetch('http://localhost:5000/products',{
      method:"put",
      headers:{
       "content-type":"application/json" 
      },
      body:JSON.stringify(updatedProduct)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    navigate('/manage')
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  return (
    <div className="addProduct">
      {editedProduct ? <h2>Edit Item</h2> : <h2>Add Item</h2>}
      <form className="add-form" onSubmit={editedProduct?handleUpdate : handleAdd}>
        <div className="img-container">
          <div className="choosenImage">
            {previewSource ? (
              <img src={previewSource} alt="" />
            ) : editedProduct ? (
              <img src={editedProduct.img} alt=""></img>
            ) : (
              <img src={emptyImage} alt=""></img>
            )}
          </div>
          <input onChange={handleChange} type="file" name="image" />
        </div>

        <div className="details-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="title"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount(Kg)"
            id="stock"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            id="price"
          />
          <textarea name="description" placeholder="Description"></textarea>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={user[0]?.email}
          />
          {editedProduct ? (
            <input className="button" type="submit" value="Edit Item" />
          ) : (
            <input className="button" type="submit" value="Add Item" />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
