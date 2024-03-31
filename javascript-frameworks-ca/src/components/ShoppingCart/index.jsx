import React from "react";
import styled from "styled-components";
import useStore from "../Store"; // Importing the useStore hook

const CartContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const CartItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const ItemName = styled.h2`
  font-size: 18px;
`;

const ItemDescription = styled.p`
  font-size: 16px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
`;

const ItemQuantity = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

function ShoppingCart() {
  const { cartItems, removeItemFromCart, clearCart } = useStore(); // Accessing the cartItems and removeItemFromCart from the store

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <div>
        {cartItems.map((item, index) => (
          <CartItem key={index}>
            <ItemName>{item.name}</ItemName>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemPrice>${item.price}</ItemPrice>
            <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
            <DeleteButton onClick={() => removeItemFromCart(index)}>
              Delete
            </DeleteButton>
          </CartItem>
        ))}
      </div>
    </CartContainer>
  );
}

export default ShoppingCart;
