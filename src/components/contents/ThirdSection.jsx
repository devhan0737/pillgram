import React from "react";
import styled from "styled-components";
import { IsDesktop, mq } from "../../lib/media-query/mediaQuery";
import Button from "../button/Button";
import {
  banBox,
  bgPack,
  combination,
  doctor,
  magicStick,
} from "../../assets/theme";

const Container = styled.div`
  max-width: 1232px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 0 0;
  gap: 40px;
  ${mq("desktop")} {
    padding: 200px 0 200px 0;
  }
`;
const TextWrap = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  span {
    font-weight: 700;
    color: #2aad5c;
  }
  ${mq("desktop")} {
    width: 100%;
    font-size: 48px;
    text-align: left;
  }
`;
const ContentsWrap = styled.div`
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 80px;
  ${mq("desktop")} {
    max-width: 1232px;
    gap: 0;
    flex-direction: row;
  }
  ${mq("tablet")} {
  }
  img {
    width: 80%;
    position: relative;
    filter: drop-shadow(10px 10px 40px#ccc);
  }
`;
const Pillpack = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  position: relative;
  ${mq("desktop")} {
    width: 800px;
    justify-content: flex-start;
  }
  p {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    font-size: 28px;
    margin: 0;
    font-weight: 700;
    ${mq("desktop")} {
      left: 43%;
    }
    span {
      color: #2aad5c;
    }
  }
`;
const OverlapPill = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  button {
    margin: 0 auto;
  }
  ${mq("desktop")} {
    height: 372px;
  }
`;
const OverlapContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${mq("desktop")} {
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;
    height: 296px;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
const OverlapTextWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 360px;
  padding: 14px 24px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  gap: 20px;
  img {
    width: 60px;
    height: 60px;
  }
  p {
    margin: 0;
    span {
      color: #2aad5c;
    }
  }
  ${mq("desktop")} {
    width: 320px;
    height: 116px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h4 {
    margin: 0;
    span {
      color: #aaaaaa;
    }
  }
`;
const ThirdSection = () => {
  return (
    <Container>
      <TextWrap>
        이런 고민을 <span>필그램</span>이
        <br />한 팩으로 해결해 드릴게요!
      </TextWrap>
      <ContentsWrap>
        <Pillpack>
          <img src={bgPack} alt="약봉지 이미지" />
          <p>
            세상에
            <br />단 하나밖에 없는
            <br />
            <span>나만의 맞춤 영양제</span>
          </p>
        </Pillpack>
        <OverlapPill>
          <OverlapContentWrap>
            <OverlapTextWrap>
              <img src={magicStick} alt="마법 지팡이 이미지" />
              <TextBox>
                <h4>드시고 계시는 영양제가 있나요?</h4>
                <p>
                  먹고 있는 영양제와
                  <br />
                  <span>충돌되는 영양제</span>를 뺄수 있어요!!
                </p>
              </TextBox>
            </OverlapTextWrap>
            <OverlapTextWrap>
              <img src={combination} alt="퍼즐 이미지" />
              <TextBox>
                <h4>
                  영양제 조합 수 <span>(5개 기준)</span>
                </h4>
                <p>
                  <span>2,121,060</span> 가지
                </p>
              </TextBox>
            </OverlapTextWrap>
            <OverlapTextWrap>
              <img src={banBox} alt="" />
              <TextBox>
                <h4>누적 소분 팩 개수</h4>
                <p>
                  <span>14,112,012</span>개
                </p>
              </TextBox>
            </OverlapTextWrap>
            <OverlapTextWrap>
              <img src={doctor} alt="" />
              <TextBox>
                <h4>참여 전문의 수</h4>
                <p>
                  <span>22</span>개 분과 <span>360</span>명
                </p>
              </TextBox>
            </OverlapTextWrap>
          </OverlapContentWrap>
          <Button />
        </OverlapPill>
      </ContentsWrap>
    </Container>
  );
};

export default ThirdSection;
