import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/Usecart";
// import { Link } from "react-router-dom";

import './ribbons.css';

const Ribbons = () => {
  const [ribbons, setRibbons] = useState([]); // State to store the ribbons

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/ribbons'); // Fetch ribbons from the API
        setRibbons(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const { addToCart } = useCart();

const navigate = useNavigate();
const handleClick = async (ribbon) => {
  addToCart(ribbon);
  navigate("/cart");
};

  return (
   
    <div className="ribbon-container">
      {ribbons.map((ribbon) => (
        <div key={ribbon._id} className="ribbon-item">
          <img src={ribbon.photos[0]} alt="" className="siImg" />
          <h1 className="siTitle">{ribbon.title}</h1>
          <h1 className="siTitle">{ribbon.color}</h1>
          <p className="siDesc">${ribbon.price}</p>
          <div>
            <button className="addToCartBtn" onClick={() => handleClick(ribbon)}>
  Add to Cart
</button>

          </div>
        </div>
      ))}
    </div>
  
  );
};

export default Ribbons;
