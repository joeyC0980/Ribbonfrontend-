
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import StripeContainer from './components/payment/StripeContainer';
import Ribbons from './pages/ribbons/Ribbons';
import Cart from './pages/cart/Cart';
import { useCart } from './pages/cart/Usecart';


function App() {
  const cart = useCart();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<StripeContainer/>}/>
     
        <Route path="/ribbons" element={<Ribbons addToCart={cart.addToCart} />} /> {/* Pass addToCart function as prop */}
        <Route
          path="/cart"
          element={<Cart
            cart={cart.cart}
            clearCart={cart.clearCart}
            removeFromCart={cart.removeFromCart}
            setQuantity={cart.setQuantity}
          />} // Pass cart data and functions as props
        />
  
      </Routes>
    </Router>
  );
}

export default App;
