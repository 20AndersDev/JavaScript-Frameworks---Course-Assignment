import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../Assets/images/logo.jpeg";
import CartIcon from "../ShoppingCart"; // Import your CartIcon component

const HeaderContainer = styled.header`
  background-color: white;
  color: black;
  padding: 10px 20px;
  height: 100%;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Li = styled.li`
  margin-right: 20px;
  cursor: pointer;
  align-items: center;
  padding: 5px;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: solid 1px #ccc;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: 100%;
  object-fit: cover;
  max-height: 100px;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

function Navbar() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <HeaderContainer>
      <Nav>
        <LogoImage src={Logo} alt="Logo" />
        <Input type="text" placeholder="Search" />
        <Ul>
          <Li>Home</Li>
          <Li>Contact</Li>
          <Li>
            <CartIcon itemCount={cartItems} />
          </Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Navbar;
