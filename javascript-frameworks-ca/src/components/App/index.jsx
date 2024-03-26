import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../navBar";
import GetItems from "../GetItems";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <GetItems />
      </div>
    </Router>
  );
}

export default App;
