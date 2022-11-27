import React, { useState } from "react";
import "./AddProduct.css";
import emptyImage from "./no-image-icon-6.png";

const AddProduct = () => {
  const [fileInput, setFileInput] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

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
      <form className="form">
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
            value={fileInput}
            id=""
          />
        </div>

        <div className="details-container">
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Amount" />
          <input type="text" placeholder="Price" />
          <textarea name="dexcription" placeholder="Description"></textarea>
          <input type="email" name="email" placeholder="Email" />
          <button>Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
