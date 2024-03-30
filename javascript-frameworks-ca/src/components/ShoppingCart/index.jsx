import React from "react";
import styled from "styled-components";

export const Items = [];

function ShoppingCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {Items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
