// ProductRating.jsx

import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

const StarContainer = styled.div`
  display: inline-block;
  color: #ffc107; /* Yellow color for stars */
`;

function renderStars(rating) {
  const stars = [];
  const roundedRating = Math.floor(rating);
  const hasHalfStar = rating - roundedRating !== 0;

  for (let i = 0; i < roundedRating; i++) {
    stars.push(<FaStar key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={stars.length} />);
  }

  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaRegStar key={stars.length + i} />);
  }

  return stars;
}

const Rating = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

function ProductRating({ rating, label }) {
  return (
    <Rating>
      {label} <StarContainer>{renderStars(rating)}</StarContainer>
    </Rating>
  );
}

export default ProductRating;
