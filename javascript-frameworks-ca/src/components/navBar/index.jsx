import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../Assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import CartIcon from "../ShoppingCart";
import { API_ITEMS } from "../../Shared/apis";
import useApi  from "../../Hooks/Apihooks";

const HeaderContainer = styled.header`
  background-color: white;
  color: black;
  padding: 10px 20px;
  height: 100%;
  top: 0%;
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
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: solid 1px #ccc;
  @media (max-width: 768px) {
    width: 100%;
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

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: allItems } = useApi(API_ITEMS);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
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
        <LogoImage src={Logo} alt="Logo" />
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
                  <SearchResultItem key={item.id}>
                    <StyledLink to={`/ProductPage/${item.id}`}>
                      <SearchResultItemImage
                        src={item.image.url}
                        alt={item.title}
                      />
                      {item.title}
                    </StyledLink>
                  </SearchResultItem>
                ))}
              </SearchResultList>
            </SearchResultContainer>
          )}
        </SearchBar>
        <Ul>
          <Li>
            <Link to="/">Home</Link>
          </Li>
          <Li>
            <Link to="/ContactPage"> Contact </Link>
          </Li>
          <Li>
            <Link to="/CheckoutPage"> <CartIcon itemCount={0} /> </Link>
          </Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Navbar;
