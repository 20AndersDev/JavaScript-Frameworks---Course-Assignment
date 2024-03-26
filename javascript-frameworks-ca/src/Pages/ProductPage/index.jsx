// ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useApi } from "../../Hooks/ApiHooks";
import { API_SINGLE_ITEM } from "../../Shared/apis";

// Styled components
const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2``;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Price = styled.p``;

const Description = styled.p``;

function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(API_SINGLE_ITEM + `/${id}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  if (!data) {
    return <div>Item not found.</div>;
  }

  return (
    <Container>
      <Title>{data.title}</Title>
      <Image src={data.image.url} alt={data.title} />
      <Price>${data.price}</Price>
      <Description>{data.description}</Description>
    </Container>
  );
}

export default ProductDetail;
