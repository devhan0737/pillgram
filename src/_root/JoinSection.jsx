import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 430px;
  width: 100%;
`;
const ContentsWrapper = styled.div`
  padding: 20px 20px 16px 20px;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 34px;
  }
  p {
    color: rgba(34, 34, 34, 0.72);
  }
`;

const JoinSection = () => {
  return (
    <Container>
      <ContentsWrapper>
        <h2>회원가입</h2>
        <p>처음이신 고객님을 위해 가입을 진행합니다.</p>
      </ContentsWrapper>
    </Container>
  );
};

export default JoinSection;
