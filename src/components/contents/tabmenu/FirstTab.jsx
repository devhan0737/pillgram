import React from "react";
import styled from "styled-components";
import Button from "./../../button/Button";
import { mq, IsDesktop } from "./../../../lib/media-query/mediaQuery";
import { analysis, counselor, magicStick } from "../../../assets/theme";

const Container = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 40px;
  ${mq("desktop")} {
    max-width: 1232px;
    width: 100%;
    flex-direction: row;
  }
`;
const LeftContentWrap = styled.div`
  width: 100%;
  height: 100%;
  ${mq("desktop")} {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
`;
const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    span {
      color: #2aad5c;
      font-weight: 700;
    }
    ${mq("desktop")} {
      font-size: 48px;
    }
  }
  p {
    margin: 0;
    span {
      font-weight: 700;
      font-size: 1.6rem;
    }
    ${mq("desktop")} {
      font-size: 18px;
    }
  }
`;

const RightContentWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const RigthContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 12px;
  height: 360px;
  justify-content: space-around;
  ${mq("desktop")} {
    align-items: center;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2aad5c;
      width: 36px;
      height: 36px;
      border-radius: 30px;
      color: #fff;
    }
    div {
      width: 260px;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      background: #f8f9fa;
      border-radius: 12px;
    }
  }
`;

const FirstTab = () => {
  return (
    <Container>
      <LeftContentWrap>
        <LeftText>
          <h2>
            나의 건강 고민을 해결해주는
            <br />
            <span>맞춤 영양제 관리!</span>
          </h2>
          <p>
            <span>건강검진 데이터</span>와 <span>건강 고민</span>을 기반으로
            <br />
            <span>전문가와 상담</span> 후 정확한 영양제 추천해드려요.
          </p>
        </LeftText>
        <IsDesktop>
          <Button />
        </IsDesktop>
      </LeftContentWrap>
      <RightContentWrap>
        <RigthContent>
          <li>
            <span>1</span>
            <div>
              <p>의료정보로 정확한 건강 분석</p>
              <img src={analysis} alt="" />
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <p>나만의 건강 고민 체크</p>
              <img src={magicStick} alt="" />
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <p>전문가와 1:1 상담</p>
              <img src={counselor} alt="" />
            </div>
          </li>
        </RigthContent>
      </RightContentWrap>
    </Container>
  );
};

export default FirstTab;
