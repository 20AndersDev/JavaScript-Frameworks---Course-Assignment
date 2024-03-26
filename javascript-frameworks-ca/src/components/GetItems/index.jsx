import { API_ITEMS } from "../../Shared/apis";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApi } from "../../Hooks/ApiHooks";

// Styled components for the card
const CardContainer = styled.div`
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
        <Card key={item.id}>
          <Title>{item.title}</Title>
          <Image src={item.image.url} alt={"Image of " + item.title} />
          <Price>${item.price}</Price>
          <Rating>Rating: {item.rating}/5</Rating>
        </Card>
      ))}
    </CardContainer>
  );
}

export default GetItems;
