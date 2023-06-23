

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import StripeContainer from './components/payment/StripeContainer';
import Ribbons from './pages/ribbons/Ribbons';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<StripeContainer/>}/>
        <Route path="/ribbons" element={<Ribbons />} />
        <Route path="/cart" element={Cart} />
      

      </Routes>
    </Router>
  );
}

export default App;
