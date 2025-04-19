import React from "react";
import styled from "styled-components";
import { mq } from "../../lib/media-query/mediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Button from "../button/Button";
import { fivestar, review1, review2, review3 } from "../../assets/theme";

const Container = styled.div`
  max-width: 380px;
  width: 100%;
  height: 540px;
  box-sizing: border-box;
  overflow: hidden;

  ${mq("desktop")} {
    max-width: 1232px;
    height: calc(100vh - 64px);
  }
`;
const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  button {
    margin: 0 auto;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  h2 {
    font-size: 2.4rem;
    margin: 0;
  }
  div {
    display: flex;
    align-content: center;
    gap: 4px;
    font-size: 1.8rem;
  }
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  overflow: visible;
  width: 100%;
  height: auto;

  .swiper-slide {
    height: auto;
    display: block;
    position: relative;

    ${mq("desktop")} {
      height: 318px;
    }

    img {
      width: 100%;
      height: 270px;
      border-radius: 26px;
      object-fit: contain;

      ${mq("desktop")} {
        width: 100%;
        border-radius: 32px;
      }
    }
  }

  .swiper-pagination {
    position: absolute;
    top: 280px;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background-color: #2aad5c;
    opacity: 1;
  }
  ${mq("desktop")} {
    height: 320px;
  }
`;
const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  height: 230px;
  top: 20px;
  left: 0;
  position: absolute;
  color: #fff;
`;
const ReviewText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 230px;
  span {
    width: fit-content;
    font-size: 13px;
    font-weight: 500;
    color: var(--white);
    line-height: 20px;
    padding: 0 12px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    display: inline-block;
  }
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
    max-height: 44px;
    font-size: 14px;
    font-weight: 400;
    color: #d2d2d2;
    line-height: 130%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
  }
`;
const ReviewTop = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 230px;
  width: 100%;
  p {
    margin: 0;
  }
  span::after {
    content: "";
    display: inline-block;
    vertical-align: -3px;
    background-size: 20px;
    background: url("/public/icon_arrow_right_white.svg") no-repeat center
      center;
    width: 16px;
    height: 16px;
    margin-left: 2px;
  }
`;

const FifthSection = () => {
  const slideArr = [
    {
      id: 1,
      star: "4.9",
      stack: "9",
      title: "저에게는 인생템입니다.",
      img: review1,
      description:
        "꾸준히 먹어야 효과를 보게 되는 약들인데 개별 포장에 알림도 되고 너무너무 좋은 상품인 것 같아요. 한 가지 제품을 박스로 사야 하는 번거로움에서 벗어나서 하루에 섭취해야만 하는 약이 한 봉씩 봉해져 있으니 인생템입니다~~~",
    },
    {
      id: 2,
      star: "4.9",
      stack: "9",
      title: "저에게는 인생템입니다.",
      img: review2,
      description:
        "꾸준히 먹어야 효과를 보게 되는 약들인데 개별 포장에 알림도 되고 너무너무 좋은 상품인 것 같아요. 한 가지 제품을 박스로 사야 하는 번거로움에서 벗어나서 하루에 섭취해야만 하는 약이 한 봉씩 봉해져 있으니 인생템입니다~~~",
    },
    {
      id: 3,
      star: "4.9",
      stack: "9",
      title: "저에게는 인생템입니다.",
      img: review3,
      description:
        "꾸준히 먹어야 효과를 보게 되는 약들인데 개별 포장에 알림도 되고 너무너무 좋은 상품인 것 같아요. 한 가지 제품을 박스로 사야 하는 번거로움에서 벗어나서 하루에 섭취해야만 하는 약이 한 봉씩 봉해져 있으니 인생템입니다~~~",
    },
    {
      id: 4,
      star: "4.9",
      stack: "9",
      title: "저에게는 인생템입니다.",
      img: review1,
      description:
        "꾸준히 먹어야 효과를 보게 되는 약들인데 개별 포장에 알림도 되고 너무너무 좋은 상품인 것 같아요. 한 가지 제품을 박스로 사야 하는 번거로움에서 벗어나서 하루에 섭취해야만 하는 약이 한 봉씩 봉해져 있으니 인생템입니다~~~",
    },
    {
      id: 5,
      star: "4.9",
      stack: "9",
      title: "저에게는 인생템입니다.",
      img: review2,
      description:
        "꾸준히 먹어야 효과를 보게 되는 약들인데 개별 포장에 알림도 되고 너무너무 좋은 상품인 것 같아요. 한 가지 제품을 박스로 사야 하는 번거로움에서 벗어나서 하루에 섭취해야만 하는 약이 한 봉씩 봉해져 있으니 인생템입니다~~~",
    },
    {
      id: 6,
      star: "4.9",
      stack: "9",
      title: "저에게는 인생템입니다.",
      img: review3,
      description:
        "꾸준히 먹어야 효과를 보게 되는 약들인데 개별 포장에 알림도 되고 너무너무 좋은 상품인 것 같아요. 한 가지 제품을 박스로 사야 하는 번거로움에서 벗어나서 하루에 섭취해야만 하는 약이 한 봉씩 봉해져 있으니 인생템입니다~~~",
    },
    {
      id: 7,
      star: "4.9",
      stack: "9",
      title: "저에게는 인생템입니다.",
      img: review1,
      description:
        "꾸준히 먹어야 효과를 보게 되는 약들인데 개별 포장에 알림도 되고 너무너무 좋은 상품인 것 같아요. 한 가지 제품을 박스로 사야 하는 번거로움에서 벗어나서 하루에 섭취해야만 하는 약이 한 봉씩 봉해져 있으니 인생템입니다~~~",
    },
  ];

  return (
    <Container>
      <ReviewWrapper>
        <ReviewHeader>
          <h2>구독자들의 특별한 이야기</h2>
          <div>
            <img src={fivestar} alt="평점 아이콘" />
            4.9
          </div>
        </ReviewHeader>

        <StyledSwiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerGroup={1}
          slidesPerView={1.4}
          loop={true}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          speed={1000}
          pagination={{
            // 페이지네이션 옵션 추가
            clickable: true,
            type: "bullets", // 페이지네이션 유형: 'bullets', 'fraction', 'progressbar' 등 선택 가능
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4.3,
              spaceBetween: 20,
              loop: true,
            },
          }}
        >
          {slideArr.map((item, idx) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.img} alt="슬라이드 이미지" />

                <ReviewContent>
                  <ReviewTop>
                    <p>{item.star}</p>
                    <p>
                      <span>
                        <a href="#">더보기</a>
                      </span>
                    </p>
                  </ReviewTop>
                  <ReviewText>
                    <span>{item.stack}회차</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </ReviewText>
                </ReviewContent>
              </SwiperSlide>
            );
          })}
        </StyledSwiper>
        <Button />
      </ReviewWrapper>
    </Container>
  );
};

export default FifthSection;
