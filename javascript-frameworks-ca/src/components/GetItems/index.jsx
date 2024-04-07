import React, { useEffect } from "react";
import { API_ITEMS } from "../../Shared/apis";
import styled from "styled-components";
import useApi from "../../Hooks/Apihooks/";
import { Link } from "react-router-dom";

// Styled components for the card
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  font-family: Arial, sans-serif;
  color: black;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Title = styled.h2`
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  margin-bottom: 30px;
`;

const Price = styled.h3`
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
`;

const ViewButton = styled.button`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* inherit color from parent */
`;

// Component for setting the title
const HomePage = () => {
  useEffect(() => {
    document.title = "The webshop - Home";
  }, []); // Empty dependency array means it will run only once after mounting

  return null;
};

function GetItems() {
  const { data, isLoading, isError } = useApi(API_ITEMS);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      <HomePage />
      <CardContainer>
        {data.map((item) => (
          <StyledLink key={item.id} to={`/ProductPage/${item.id}`}>
            <Card>
              <Image src={item.image.url} alt={"Image of " + item.title} />
              <Title>{item.title}</Title>
              <Price>${item.price}</Price>
              <ViewButton>View product</ViewButton>
            </Card>
          </StyledLink>
        ))}
      </CardContainer>
    </div>
  );
}

export default GetItems;
