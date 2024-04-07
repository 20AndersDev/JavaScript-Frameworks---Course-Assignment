import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  justify-content: center;
  display: flex;
  width: 100%;
  background-color: #0384fc;
  color: white;
  position: relative; /* Change position to relative */
  bottom: 0;
`;

const MainContent = styled.div`
  min-height: calc(50vh - 30px);
`;

function Footer() {
  return (
    <>
      <MainContent>{/* Your main content here */}</MainContent>
      <FooterContainer>
        <p>Copyright 2024</p>
      </FooterContainer>
    </>
  );
}

export default Footer;
