import React from "react"
import { useNavigate } from "react-router-dom";


export default function Cart({ cart, clearCart, removeFromCart, setQuantity }) {


const getTotalSum=()=>{
    return cart.reduce((sum,{price,quantity})=> sum + price*quantity, 0);

}

const navigate = useNavigate();
const handleClick = async () => {

  navigate("/payment");
};




    return(
        <>
        <div >
            <h1>Your Cart 🛒</h1>
            <div className="head">
            <div> {cart.length > 0 &&( <button onClick={clearCart}>Remove All</button>)}</div>
           <div><button className="total">Total:${getTotalSum()}</button></div>
           </div>
      
           <div className="products-container" height="570" width="400">
    
        {cart.map((ribbon,index) =>(
          <div className="product-card" key={index}>
            <div>{ribbon.name}</div>
            <div>${ribbon.cost}</div>
            Quantity:<input value={ribbon.quantity} onChange={(e)=> setQuantity(ribbon,e.target.value)} style={{width: "20px", height: "10px" }}></input>
            <img src={ribbon.image} alt={ribbon.name} height="70%" width="90%"/>
            <button onClick={()=> removeFromCart(ribbon)} className="button2">Remove</button>
        
            </div>
        ))}
        </div>
            </div>
            <button onclick={handleClick}>Pay</button>
         
            </>
    )
}