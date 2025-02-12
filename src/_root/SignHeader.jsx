import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 430px;
  height: 68px;
  z-index: 400;
`;
const ContentsWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
`;
const Logo = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  a {
    display: flex;
    align-items: center;
  }
  img {
    width: 120px;
    height: 36px;
  }
`;

const SignHeader = () => {
  return (
    <Container>
      <ContentsWrapper>
        <Logo>
          <a href="/">
            <img src="/public/logo1.svg" alt="" />
          </a>
        </Logo>
      </ContentsWrapper>
    </Container>
  );
};

export default SignHeader;
