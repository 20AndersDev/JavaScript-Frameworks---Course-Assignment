import React from "react";
import styled from "styled-components";
import useStore from "../Store";
import { Link } from "react-router-dom";
import CheckoutSuccess from "../CheckoutSuccess";

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

const QuantityButton = styled.button`
  margin-right: 5px;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

function ShoppingCart() {
  const { cartItems, removeItemFromCart, clearCart, updateQuantity } =
    useStore();

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 0) {
      updateQuantity(index, newQuantity);
    }
  };

  // Calculate total price of all items in the cart
  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <h1>Shopping Cart</h1>
        <p>Your shopping cart is empty.</p>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <Link to={"/CheckoutSuccessPage"}>
        <button onClick={() => clearCart()}> CheckOut</button>
      </Link>
      <div>
        {cartItems.map((item, index) => (
          <CartItem key={index}>
            <ItemImage src={item.image.url} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemPrice>${item.price}</ItemPrice>
            <ItemQuantity>
              Quantity:{" "}
              <QuantityButton
                onClick={() => handleQuantityChange(index, item.quantity - 1)}
              >
                -
              </QuantityButton>
              {item.quantity}
              <QuantityButton
                onClick={() => handleQuantityChange(index, item.quantity + 1)}
              >
                +
              </QuantityButton>
            </ItemQuantity>
            <ItemPrice>Total: ${item.totalPrice}</ItemPrice>{" "}
            {/* Display total price of the item */}
            <DeleteButton onClick={() => removeItemFromCart(index)}>
              Delete
            </DeleteButton>
          </CartItem>
        ))}
      </div>
      <div>Total Cart Price: ${totalCartPrice}</div>{" "}
      {/* Display total price of all items */}
    </CartContainer>
  );
}

export default ShoppingCart;
