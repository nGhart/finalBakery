import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import BakesHome from './Pages/BakesHome';
import Review from './Components/Review';
import Cart from './Components/Cart';
import Faqs from './Components/Faqs';
import Gallery from './Components/Gallery';
import PaystackForm from './Components/PaystackForm';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<BakesHome />} />
      <Route path="menu" element={<Menu />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="cart" element={<Cart />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="review" element={<Review />} />
      <Route path="checkout" element={<PaystackForm />} />
    </Routes>
  );
};

export default Routing;
