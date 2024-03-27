import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { API_SINGLE_ITEM } from "../../Shared/apis";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_SINGLE_ITEM + `${id}`);
        const data = await response.json();
        setProduct(data.data);
        console.log("Product data:", data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchData();

    // Cleanup function if needed
    return () => {
      // Any cleanup code
    };
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image.url} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
    </div>
  );
}

export default ProductDetail;
