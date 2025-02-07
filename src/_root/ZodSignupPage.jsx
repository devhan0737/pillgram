import React from "react";
import styled from "styled-components";
import SignForm from "./SignForm";
import SignHeader from "./SignHeader";
import JoinSection from "./JoinSection";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentsWrapper = styled.div`
  margin: 56px 0 0 0;
  max-width: 430px;
  width: 100%;
`;

const ZodSignupPage = () => {
  return (
    <Container>
      <ContentsWrapper>
        <SignHeader />
        <JoinSection />
        <SignForm />
      </ContentsWrapper>
    </Container>
  );
};

export default ZodSignupPage;
