import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductDetail from "../../components/getSingleItem";
import Layout from "../../components/Layout";

function ProductPage() {
  return (
    <Layout>
      <ProductDetail />
    </Layout>
  );
}

export default ProductPage;
