import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { API_SINGLE_ITEM } from "../../Shared/apis";
import useStore from "../Store";
import ProductReviewRating from "../ItemStarRating";
import ProductRating from "../ItemStarRating";
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex; /* Use flexbox */
`;

const ImageContainer = styled.div`
  flex: 1; /* Take 1/3 of available space */
  margin-right: 20px; /* Add some space between the image and text */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  flex: 2; /* Take 2/3 of available space */
  display: flex;
  flex-direction: column; /* Align text vertically */
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Discount = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Rating = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ReviewsContainer = styled.div`
  margin-bottom: 20px;
`;

const Review = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

const ReviewUsername = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ReviewDescription = styled.p`
  font-size: 16px;
  margin-bottom: 0;
`;

const AddToCartButtonStyled = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItemToCart, cartItems } = useStore();

  const ItemPage = () => {
    useEffect(() => {
      document.title = "The webshop - Item";
    }, []);

    return null;
  };

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

  const { price, discountedPrice, reviews } = product;
  const discountDifference = price - discountedPrice;

  const AddToCartButton = () => (
    <AddToCartButtonStyled
      onClick={() => {
        addItemToCart(product);
        console.log(cartItems);
      }}
    >
      Add to Cart
    </AddToCartButtonStyled>
  );

  const Reviews = () => {
    if (reviews.length === 0) {
      return <p>This item has no reviews yet.</p>;
    }

    return (
      <ReviewsContainer>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <Review key={review.id}>
            <ReviewUsername>{review.username}</ReviewUsername>
            <ProductReviewRating rating={review.rating} />{" "}
            <ReviewDescription>{review.description}</ReviewDescription>
          </Review>
        ))}
      </ReviewsContainer>
    );
  };

  return (
    <Container>
      <ItemPage />
      <ImageContainer>
        <Image src={product.image.url} alt={product.title} />
      </ImageContainer>
      <TextContainer>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        {discountedPrice === price ? (
          <Price>${price.toFixed(2)}</Price>
        ) : (
          <>
            <Price>${discountedPrice}</Price>
            <Discount>
              This item is on a discount of: ${discountDifference.toFixed(2)}
            </Discount>
          </>
        )}
        <ProductRating rating={product.rating} label="Rating:" />
        <AddToCartButton />
        <Reviews />
      </TextContainer>
    </Container>
  );
}

export default ProductDetail;
