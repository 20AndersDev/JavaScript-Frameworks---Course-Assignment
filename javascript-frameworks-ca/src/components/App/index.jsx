import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import ProductPage from "../../Pages/ProductPage"; // Changed the import name
import Navbar from "../navBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
