import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import ProductPage from "../../Pages/ProductPage"; 
import ContactPage from "../../Pages/ContactPage";
import CheckoutPage  from "../../Pages/CheckoutPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
        <Route path="/ContactPage/" element={<ContactPage />} />
        <Route path="/CheckoutPage/" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
