import React, { useState } from "react";
import "./AddProduct.css";
import emptyImage from "./no-image-icon-6.png";

const AddProduct = () => {
  const [previewSource, setPreviewSource] = useState("");


  const handleAdd=(e)=>{
    e.preventDefault();
    const title = e.target.name.value;
    const img = previewSource;
    const stock = e.target.amount.value;
    const price = e.target.price.value;
    const email = e.target.email.value;
    let newProduct ={
      title : title,
      img : img,
      stock : stock,
      price : price,
      email : email
    };
    fetch('http://localhost:5000/products',{
      method:'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    e.target.reset()
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
      <h2>Add Item</h2>
      <form className="form" onSubmit={handleAdd}>
        <div className="img-container">
          <div className="choosenImage">
            {previewSource ? (
              <img src={previewSource} alt="" />
            ) : (
              <img src={emptyImage} alt=""></img>
            )}
          </div>
          <input
            onChange={handleChange}
            type="file"
            name="image"
          />
        </div>

        <div className="details-container">
          <input type="text" name="name" placeholder="Name"/>
          <input type="number" name="amount" placeholder="Amount" />
          <input type="text" name="price" placeholder="Price" />
          <textarea name="dexcription" placeholder="Description"></textarea>
          <input type="email" name="email" placeholder="Email" />
          <input className="button" type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
