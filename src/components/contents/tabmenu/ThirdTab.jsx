import React from "react";
import styled from "styled-components";
import Button from "./../../button/Button";
import { mq, IsDesktop } from "./../../../lib/media-query/mediaQuery";

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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 12px;
  height: 380px;
  overflow: hidden;
  ${mq("desktop")} {
    height: 300px;
  }
  img {
    object-fit: contain;
    height: 300px;
    width: 380px;
    ${mq("desktop")} {
      height: 300px;
    }
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -2;
    border-radius: 350px;
    background: #2aad5c;
    width: 380px;
    height: 380px;
    ${mq("desktop")} {
      width: 296px;
      height: 296px;
      top: 0;
      left: 40px;
    }
  }
`;

const ThirdTab = () => {
  return (
    <Container>
      <LeftContentWrap>
        <LeftText>
          <h2>
            하루 한 팩으로
            <br />
            <span>더 간편하게, 더 확실하게!</span>
          </h2>
          <p>
            내 몸에 필요한 영양제를
            <br />
            <span>하루 한 팩으로 소분</span>해드려요.
          </p>
        </LeftText>
        <IsDesktop>
          <Button />
        </IsDesktop>
      </LeftContentWrap>
      <RightContentWrap>
        <RigthContent>
          <img src="/public/img_pack_B (1).png" alt="" />
        </RigthContent>
      </RightContentWrap>
    </Container>
  );
};

export default ThirdTab;
