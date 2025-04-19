import React from "react";
import styled from "styled-components";
import { mq, IsDesktop } from "../../lib/media-query/mediaQuery";
import Button from "../button/Button";
import mobileBg from "../../assets/img/mobilebackground.png";

const Container = styled.div`
  width: 100%;
  height: 540px;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 20px;
  ${mq("desktop")} {
    max-width: 1232px;
    height: calc(100vh - 64px);
  }
`;
const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${mobileBg});
    background-size: cover;
    background-position: center;
    z-index: 1;
    ${mq("desktop")} {
      background-size: contain;
      background-repeat: no-repeat;
      left: 200px;
    }
  }
`;
const ContentsWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-evenly;
  z-index: 2;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  gap: 240px;
  ${mq("desktop")} {
    align-items: self-start;
  }
`;
const Twrap = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mq("desktop")} {
    gap: 40px;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
  }
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
`;
const Text1 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  color: #222222;
  ${mq("desktop")} {
    font-size: 40px;
  }
  span {
    color: #2aad5c;
  }
`;
const Text2 = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #222222;
`;

const FisrtSection = () => {
  return (
    <Container>
      <BackgroundImg>
        <ContentsWrap>
          <Twrap>
            <TextWrap>
              <Text1>
                내 건강을 위한 특별한 선택
                <br />
                <span>나만을 위한 영양제!</span>
              </Text1>
              <Text2>
                건강검진 데이터와 전문가 상담으로
                <br />
                나만의 영양제를 찾아보세요.
              </Text2>
            </TextWrap>
            <Button>
              <a href="#">나에게 딱 맞는 영양제 찾기</a>
            </Button>
          </Twrap>
        </ContentsWrap>
      </BackgroundImg>
    </Container>
  );
};

export default FisrtSection;
