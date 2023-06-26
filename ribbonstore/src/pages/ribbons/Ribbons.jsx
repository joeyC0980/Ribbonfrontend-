import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCart } from '../cart/UseCart';


import './ribbons.css';

const Ribbons = () => {
  const { cart,addToCart } = useCart();
  const [ribbons, setRibbons] = useState([]); // State to store the ribbons
  const [quantity, setQuantity] = useState(0)

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



const navigate = useNavigate();
const handleClick = async (e, ribbon) => {
  setQuantity(quantity + 1)
  e.preventDefault();
  console.log('Adding to cart:', ribbon);
  addToCart(ribbon);
  // navigate('/cart');
};

console.log(quantity)

const navigateToCart =() =>{
  navigate('/cart');
  console.log('this is working')
};

const getCartTotal=()=>{
  return cart.reduce((sum,{quantity})=> sum + quantity, 0);

}



  return (
   
    <div className="ribbon-container">
      {ribbons.map((ribbon) => (
        <div key={ribbon._id} className="ribbon-item">
          <img src={ribbon.photos[0]} alt="" className="siImg" />
          <h1 className="siTitle">{ribbon.title}</h1>
          <h1 className="siTitle">{ribbon.color}</h1>
          <p className="siDesc">${ribbon.price}</p>
          <div>
            <button className="addToCartBtn" onClick={(e) => handleClick(e,ribbon)}>
  Add to Cart
</button>
<br/>
<button  className="addToCartBtn" onClick={navigateToCart} >Go to cart ({getCartTotal()})</button>


          </div>
        </div>
      ))}
    </div>
  
  );
};

export default Ribbons;
