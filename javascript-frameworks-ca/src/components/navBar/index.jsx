import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../Assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import useStore from "../Store";
import { API_ITEMS } from "../../Shared/apis";
import useApi from "../../Hooks/Apihooks";

const HeaderContainer = styled.header`
  position: sticky;
  background-color: white;
  color: black;
  padding: 10px 20px;
  height: 100%;
  top: 0%;
  z-index: 100;
  border-bottom: 1px solid #ccc;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    padding: 10px;
    border: 1px solid #ccc;
    z-index: 10;
  }
`;

const Li = styled.li`
  margin-right: 20px;
  cursor: pointer;
  align-items: center;
  padding: 5px;
  font-size: 1.2rem;
`;

const CartStyle = styled(TiShoppingCart)`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

const CartItemCount = styled.span`
  position: absolute;
  top: 0px; /* Adjust top position as needed */
  right: 0px; /* Adjust right position as needed */
  background-color: red;
  color: white;
  border-radius: 50%; /* Change from 100% to 50% for a circular shape */
  padding: 3px 6px; /* Adjust padding as needed */
  font-size: 0.6rem; /* Adjust font size as needed */
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: solid 1px #ccc;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 350px;
  margin-right: 100px;
  height: 100%;
  object-fit: cover;
  max-height: 100px;
`;

const SearchBar = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const SearchResultContainer = styled.div`
  position: absolute;
  top: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
`;

const SearchResultList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SearchResultItem = styled.li`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SearchResultItemImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ShoppingCartContainer = styled.div`
  position: relative;
  margin-left: 20px;
`;

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false); // State for menu visibility
  const cartItems = useStore((state) => state.cartItems);
  const { data: allItems } = useApi(API_ITEMS);

  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  let filteredItems = [];
  if (searchQuery) {
    filteredItems = allItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <HeaderContainer>
      <Nav>
        <Link to="/">
          <LogoImage src={Logo} alt="Logo" />
        </Link>
        <SearchBar>
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {searchQuery && filteredItems.length > 0 && (
            <SearchResultContainer>
              <SearchResultList>
                {filteredItems.map((item) => (
                  <StyledLink to={`/ProductPage/${item.id}`}>
                    <SearchResultItem key={item.id}>
                      <SearchResultItemImage
                        src={item.image.url}
                        alt={item.title}
                      />
                      {item.title}
                    </SearchResultItem>
                  </StyledLink>
                ))}
              </SearchResultList>
            </SearchResultContainer>
          )}
        </SearchBar>
        <ShoppingCartContainer>
          <Link to="/CheckoutPage">
            <CartStyle />
            {cartItemCount > 0 && (
              <CartItemCount>{cartItemCount}</CartItemCount>
            )}
          </Link>
        </ShoppingCartContainer>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
        <Ul showMenu={showMenu}>
          {" "}
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/ContactPage"> Contact </StyledLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Navbar;
