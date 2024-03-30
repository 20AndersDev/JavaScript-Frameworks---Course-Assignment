import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { API_ITEMS } from "../../Shared/apis";
import styled from "styled-components";
import  useApi  from "../../Hooks/Apihooks/";

// Styled components for the card
const CardContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 350px;
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  border-radius: 8px;
  height: auto;
  max-height: 200px;
  object-fit: cover;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Price = styled.h3`
  margin-bottom: 5px;
`;

const Rating = styled.p`
  margin: 0;
`;

function GetItems() {
  const { data, isLoading, isError } = useApi(API_ITEMS);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <CardContainer>
      {data.map((item) => (
        <Link key={item.id} to={`/ProductPage/${item.id}`}>
          <Card>
            <Image src={item.image.url} alt={"Image of " + item.title} />
            <Title>{item.title}</Title>
            <Price>${item.price}</Price>
            <Rating>Rating: {item.rating}/5</Rating>
            <button>View product</button>
          </Card>
        </Link>
      ))}
    </CardContainer>
  );
}

export default GetItems;
