import React from "react";
import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";

const CartIconContainer = styled.div`
  position: relative;
`;

const CartIcon = styled(TiShoppingCart)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

const ItemCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  font-size: 0.8rem;
  padding: 3px 6px;
  border-radius: 50%;
`;

const Cart = ({ itemCount }) => {
  return (
    <CartIconContainer>
      <CartIcon />
      {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
    </CartIconContainer>
  );
};

export default Cart;
