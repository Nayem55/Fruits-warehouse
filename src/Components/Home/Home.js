import React from "react";
import "./Home.css";
import img from "./img.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-text">
          <h1>Fruits and Vegs Storage</h1>
          <p>We ensure the best way to store and manage ypur products</p>
        </div>
      </div>
      <div className="section-1">
        <div className="section-description">
          <h1>
            Fruit Inventory Management: Improve Traceability and Efficiency
          </h1>
          <p>
            Are you looking for an efficient fruits and vegetable stock control
            system to manage incoming fresh produce from the very moment it’s
            delivered to your warehouse? A complete fresh produce stock control
            system can be accomplished with movement tracking, labelling,
            quality control, temperature control, registration and documentation
            of incoming produce — all of which are vital in developing an
            accurate audit trail in the produce industry.
          </p>
          <p>
            Netgen can help you improve efficiency and traceability of your
            fresh produce with an efficient fruit inventory management system.
            Traceability functions allow you to easily allocate information for
            all inventory in your warehouse or retail stores, thus helping you
            meet high international food safety regulations. To ensure accurate
            stock information at all times, stock-take processes should be
            implemented across the entire farm. This will reduce the risk of
            wastage and ensure optimal inventory accountability.
          </p>
        </div>
        <div className="section-img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="home-inventory">
        <h1>Our Inventory</h1>
        <div className="home-inventory-products">
            <div className="home-inventory-product">
                <h3>Grape</h3>
                <img src="https://i.ibb.co/cwYv2C8/grapes.jpg" alt="grapes" border="0"/>
                <p>price: $49/kg</p>
                <p>In stock: 50 kgs</p>
                <button onClick={()=>navigate('/inventory')}>Check your inventory</button>
            </div>
            <div className="home-inventory-product">
                <h3>Mango</h3>
                <img src="https://i.ibb.co/yFKCyCB/mangoes.webp" alt="" />
                <p>price: $49/kg</p>
                <p>In stock: 50 kgs</p>
                <button onClick={()=>navigate('/inventory')}>Check your inventory</button>
            </div>
            <div className="home-inventory-product">
                <h3>Blackberry</h3>
                <img src="https://i.ibb.co/2ZKwmwg/blackberry.jpg" alt=""/>
                <p>price: $49/kg</p>
                <p>In stock: 50 kgs</p>
                <button onClick={()=>navigate('/inventory')}>Check your inventory</button>
            </div>
            <div className="home-inventory-product">
                <h3>Lichi</h3>
                <img src="https://i.ibb.co/Z1DzbFJ/lichi.webp" alt="lichi" border="0"/>
                <p>price: $49/kg</p>
                <p>In stock: 50 kgs</p>
                <button onClick={()=>navigate('/inventory')}>Check your inventory</button>
            </div>
            <div className="home-inventory-product">
                <h3>Apple</h3>
                <img src="https://i.ibb.co/z7W8vcb/apple.jpg" alt="" />
                <p>price: $49/kg</p>
                <p>In stock: 50 kgs</p>
                <button onClick={()=>navigate('/inventory')}>Check your inventory</button>
            </div>
            <div className="home-inventory-product">
                <h3>Strawberry</h3>
                <img src="https://i.ibb.co/1TbKSg7/strawberry.jpg" alt="" />
                <p>price: $49/kg</p>
                <p>In stock: 50 kgs</p>
                <button onClick={()=>navigate('/inventory')}>Check your inventory</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
