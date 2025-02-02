import React from "react";
import styled from "styled-components";
import SignForm from "./SignForm";

const Container = styled.div`
  width: 100%;
  margin: 56px 0 0 0;
`;

const ZodSignupPage = () => {
  return (
    <Container>
      <SignForm />
    </Container>
  );
};

export default ZodSignupPage;
