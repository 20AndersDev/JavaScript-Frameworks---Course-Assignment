import React from "react";
import styled from "styled-components";
import useStore from "../Store";
import { Link } from "react-router-dom";

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ItemInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const ItemName = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ItemDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const QuantityButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckoutButton = styled(ActionButton)`
  margin-left: auto;
  background-color: green;
`;

const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
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
        <CartTitle>Shopping Cart</CartTitle>
        <p>Your shopping cart is empty.</p>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <ActionButton onClick={() => clearCart()}>Clear Cart</ActionButton>

      <div>
        {cartItems.map((item, index) => (
          <CartItem key={index}>
            <ItemImage src={item.image.url} alt={item.name} />
            <ItemInfo>
              <ItemName>{item.title}</ItemName>
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
              <ItemPrice>Total: ${item.totalPrice.toFixed(2)}</ItemPrice>{" "}
            </ItemInfo>
            <DeleteButton onClick={() => removeItemFromCart(index)}>
              Delete
            </DeleteButton>
          </CartItem>
        ))}
        <ButtonContainer>
          <TotalPrice>
            Total Cart Price: ${totalCartPrice.toFixed(2)}
          </TotalPrice>{" "}
          <Link to={"/CheckoutSuccessPage"}>
            <CheckoutButton onClick={() => clearCart()}>
              Checkout
            </CheckoutButton>
          </Link>
        </ButtonContainer>
      </div>
    </CartContainer>
  );
}

export default ShoppingCart;
