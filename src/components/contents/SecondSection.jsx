import React from "react";
import styled from "styled-components";
import { mq, IsDesktop } from "../../lib/media-query/mediaQuery";

const Container = styled.div`
  width: 100%;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  padding: 80px 0 0 0;
  ${mq("desktop")} {
    padding: 200px 0 0 0;
    gap: 80px;
  }
`;
const TextWrapper = styled.h2`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  span {
    color: #2aad5c;
    font-weight: 800;
  }
  ${mq("desktop")} {
    font-size: 48px;
  }
`;
const ListWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  ${mq("desktop")} {
    width: 60%;
    gap: 24px;
  }
  li {
    position: relative;
    width: fit-content;
    background: #4a4a4a;
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 16px;
    color: #fff;
    ${mq("desktop")} {
      font-size: 24px;
      padding: 24px 32px;
      border-radius: 25px;
    }
    p {
      margin: 0;
    }
  }
  li:nth-child(odd) {
    align-self: flex-start;
  }
  li:nth-child(even) {
    align-self: flex-end;
  }
  li:nth-child(1) {
    ${mq("desktop")} {
      margin-left: 120px;
    }
  }
  li:nth-child(2) {
    ${mq("desktop")} {
      margin-right: 80px;
    }
  }
  li:nth-child(3) {
    ${mq("desktop")} {
      margin-left: 40px;
    }
  }
  li:nth-child(4) {
    ${mq("desktop")} {
      margin-right: 200px;
    }
  }

  li p::after {
    content: "";
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    ${mq("desktop")} {
      height: 48px;
      width: 48px;
    }
  }
  li:nth-child(1) p::after {
    background: url("/public/EmojiPill.svg") no-repeat center center;
    background-size: contain;
    left: -12px;
  }
  li:nth-child(2) p::after {
    background: url("/public/Magnifier.svg") no-repeat center center;
    background-size: contain;
    right: -12px;
  }
  li:nth-child(3) p::after {
    background: url("/public/Face.svg") no-repeat center center;
    background-size: contain;
    left: -12px;
  }
  li:nth-child(4) p::after {
    background: url("/public/Face02.svg") no-repeat center center;
    background-size: contain;
    right: -12px;
  }
`;

const SecondSection = () => {
  return (
    <Container>
      <ContentsWrapper>
        <TextWrapper>
          사람마다 <span>건강</span>도, <span>고민</span>도 다른데
          <br />
          <span>영양제</span>는 왜 똑같이 먹을까요?
        </TextWrapper>
        <ListWrapper>
          <li>
            <p>다들 먹는 영양제 나도 먹어야하나?</p>
          </li>
          <li>
            <p>비타민C랑 D중에 뭐가 더 필요하지?</p>
          </li>
          <li>
            <p>나는 유산균은 잘 안맞는데..</p>
          </li>
          <li>
            <p>엄마랑 영양제 같이 먹어도 되나?</p>
          </li>
        </ListWrapper>
      </ContentsWrapper>
    </Container>
  );
};

export default SecondSection;
