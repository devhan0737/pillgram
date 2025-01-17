import React from "react";
import styled from "styled-components";

const MainButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 354px;
  width: 100%;
  height: 56px;
  border-radius: 50px;
  box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.15);
  background: linear-gradient(96deg, #1dc25c 5.56%, #2aad5c 61.87%);
  color: white;
  border: none;
`;
const Button = () => {
  return <MainButton>나에게 딱 맞는 영양제 찾기</MainButton>;
};

export default Button;
