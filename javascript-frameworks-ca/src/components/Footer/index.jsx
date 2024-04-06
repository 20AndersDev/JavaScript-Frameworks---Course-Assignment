import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  justify-content: center;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  position: sticky;
  bottom: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Created by: Group 3</p>
    </FooterContainer>
  );
}

export default Footer;
