import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  margin-top: 30px;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Created by: Group 3</p>
    </FooterContainer>
  );
}

export default Footer;
