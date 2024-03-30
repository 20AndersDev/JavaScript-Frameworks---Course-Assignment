import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { API_SINGLE_ITEM } from "../../Shared/apis";
import { Items } from "../../components/ShoppingCart";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Discount = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Rating = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_SINGLE_ITEM + `${id}`);
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchData();
    return () => {};
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { price, discountedPrice } = product;
  const discountDifference = price - discountedPrice;

  const Reviews = () => {
    return product.reviews.map((review) => {
      return (
        <div key={review.id}>
          <h3>{review.username}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.description}</p>
        </div>
      );
    });
  };

  const AddToCartButton = () => {
    return (
      <button
        onClick={() => {
          Items.push(product);
          console.log(Items);
        }}
      >
        Add to cart
      </button>
    );
  };

  return (
    <Container>
      <Title>{product.title}</Title>
      <Image src={product.image.url} alt={product.title} />
      <Description>{product.description}</Description>
      {discountedPrice === price ? (
        <Price>Price: ${price}</Price>
      ) : (
        <>
          <Price>Price: ${discountedPrice}</Price>
          <Discount>
            This item is on an discount of: ${discountDifference}
          </Discount>
        </>
      )}
      <Rating>Rating: {product.rating}/5</Rating>
      <AddToCartButton></AddToCartButton>
      <Reviews></Reviews>
    </Container>
  );
}

export default ProductDetail;
