
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./UseCart";

export default function Cart() {
  const { cart, addToCart, clearCart, removeFromCart, setQuantity, getTotalItem } = useCart();

  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };


  const navigate = useNavigate();
  const handleClick = async () => {
    navigate("/payment");
  };
  console.log('Cart:', cart)

  return (
    <>
      <div>
        <h1>Your Cart 🛒</h1>
        <div className="head">
          <div>
            <button className="total">Total: ${getTotalSum()}</button>
          </div>
        </div>

        <div className="products-container">
          {cart.map((ribbon, index) => (
           

            <div className="product-card" key={index}>
              <img src={ribbon.photos[0]} alt={ribbon.title} />
              <div>{ribbon.title}</div>
              <div>${ribbon.price}</div>
              Quantity:
              <input
                value={ribbon.quantity}
                onChange={(e) => setQuantity(ribbon, e.target.value)}
              ></input>

              <button onClick={() => removeFromCart(ribbon)} className="button2">
                Remove
              </button>
  
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleClick}>Pay</button>
    </>
  );
}


