
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import StripeContainer from './components/payment/StripeContainer';
import Ribbons from './pages/ribbons/Ribbons';
import Cart from './pages/cart/Cart';
import { useCart } from './pages/cart/UseCart';

function App() {
  const { cart, removeFromCart, clearCart, setQuantity,addToCart } = useCart();

  console.log('Cart:', cart);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<StripeContainer />} />
        <Route path="/ribbons" element={<Ribbons 
          cart={cart}
          addToCart={addToCart} 
          clearCart={clearCart}
          removeFromCart={removeFromCart}
          setQuantity={setQuantity}
        />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart} 
              clearCart={clearCart}
              removeFromCart={removeFromCart}
              setQuantity={setQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

