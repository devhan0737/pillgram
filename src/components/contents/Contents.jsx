import React from "react";
import FisrtSection from "./FisrtSection";
import styled from "styled-components";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";

const Container = styled.div`
  width: 100%;
  position: relative;
  top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contents = () => {
  return (
    <Container>
      <FisrtSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </Container>
  );
};

export default Contents;
