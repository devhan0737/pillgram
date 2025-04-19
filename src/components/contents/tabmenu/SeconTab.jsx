import React from "react";
import styled from "styled-components";
import Button from "./../../button/Button";
import { mq, IsDesktop } from "./../../../lib/media-query/mediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Routine1, Routine2, Routine3 } from "../../../assets/theme";

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
  display: block;
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
      font-size: 1.6rem;
      font-weight: 700;
    }
    ${mq("desktop")} {
      font-size: 1.8rem;
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
  justify-content: center;
  margin: 0 auto;
  gap: 12px;
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: auto;
  .swiper-slide {
    width: 300px;
    height: 360px;
    ${mq("desktop")} {
      width: 271px !important;
      height: 318px;
    }
    img {
      width: 300px;
      height: 360px;
      object-fit: contain;
      ${mq("desktop")} {
        width: 271px;
        height: 318px;
      }
    }
  }
  ${mq("desktop")} {
    height: 320px;
    width: 600px !important;
  }
`;
const SwiperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 12px;
  width: 260px;
  height: 320px;
  position: absolute;
  top: 50%;
  left: 47%;
  color: #fff;
  transform: translate(-50%, -50%);
  ${mq("desktop")} {
    width: 210px;
    height: 290px;
  }
  p {
    margin: 0;
  }
  h2 {
    font-size: 24px;
    margin: 0;
  }
  span {
    padding: 8px 12px;
    border-radius: 20px;
    background: #fff;
    color: #000;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
`;
const SeconTab = () => {
  return (
    <Container>
      <LeftContentWrap>
        <LeftText>
          <h2>
            필요한 영양제로 구성된
            <br />
            <span>나만의 하루 영양제 루틴</span>
          </h2>
          <p>
            <span>50여개의 영양제</span>중에서 <br />
            나에게
            <span>필요한 영양제</span>만 선별해드릴게요.
          </p>
        </LeftText>
        <IsDesktop>
          <Button />
        </IsDesktop>
      </LeftContentWrap>
      <RightContentWrap>
        <RigthContent>
          <StyledSwiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1.2}
            breakpoints={{
              1024: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <img src={Routine1} alt="" />
              <SwiperText>
                <p>오전 섭취</p>
                <TextBox>
                  <span>비타민B</span>
                </TextBox>
                <p>자기전 섭취</p>
                <TextBox>
                  <span>비타민B12</span>
                  <span>L-테아닌</span>
                  <span>마그네슘</span>
                </TextBox>
                <h2>
                  수면시간이
                  <br />턱 없이 부족하다면?
                </h2>
              </SwiperText>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Routine2} alt="" />
              <SwiperText>
                <p>오전 섭취</p>
                <TextBox>
                  <span>비타민B</span>
                  <span>비타민C</span>
                </TextBox>
                <p>자기전 섭취</p>
                <TextBox>
                  <span>밀크씨슬</span>
                  <span>오메가3</span>
                  <span>MSM</span>
                </TextBox>
                <h2>
                  술자리가 잦은
                  <br />
                  MZ 직장인이라면?
                </h2>
              </SwiperText>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Routine3} alt="" />
              <SwiperText>
                <p>오전 섭취</p>
                <TextBox>
                  <span>프로바이오틱스</span>
                </TextBox>
                <p>자기전 섭취</p>
                <TextBox>
                  <span>프로폴리스</span>
                  <span>L-비타민D</span>
                  <span>아연</span>
                  <span>비타민C</span>
                </TextBox>
                <h2>
                  면연력과 기력이
                  <br />
                  부족한 나이라면?
                </h2>
              </SwiperText>
            </SwiperSlide>
          </StyledSwiper>
        </RigthContent>
      </RightContentWrap>
    </Container>
  );
};

export default SeconTab;
