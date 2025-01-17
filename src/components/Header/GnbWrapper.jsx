import React, { useState } from "react";
import styled from "styled-components";
import { IsDesktop, mq } from "../../lib/media-query/mediaQuery";

const GnbWrap = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-10px)"};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  z-index: 9999;
  box-sizing: border-box;
  background: #fff;

  ${mq("desktop")} {
    position: static;
    opacity: 1;
    width: auto;
    height: 100%;
    overflow: hidden;
    transform: none;
    pointer-events: auto;
  }
`;

const Gnb = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  padding: 8px 24px;
  top: 64px;
  left: 0;
  box-sizing: border-box;

  ${mq("desktop")} {
    padding: 0;
    height: 100%;
    flex-direction: row;
    gap: 32px;
  }

  li {
    padding: 12px 0;

    ${mq("desktop")} {
      padding: 0;
      display: flex;
      align-items: center;
    }
    a {
      width: 100%;
      display: block;
      line-height: 30px;
      transition: color 0.3s ease-in-out;
      color: black;
      &[data-active="true"] {
        color: #2aad5c; /* 클릭된 상태일 때 색상 */
      }
      ${mq("desktop")} {
        font-size: 1.8rem;
      }
      a:hover {
        color: #2aad5c; /* hover 시 색상 */
      }
    }
  }
`;

const GnbWrapper = ({ isOpen }) => {
  const [activeIndex, setActiveIndex] = useState(null); // 여러 항목을 관리할 수 있도록 상태 수정

  const handleClick = (index) => {
    setActiveIndex(index); // 클릭한 항목의 인덱스를 설정
  };

  // 메뉴 항목을 배열로 정의
  const menuItems = [
    "맞춤영양제 추천받기",
    "영양제 정보",
    "고객후기",
    "브랜드 스토리",
    "필그램 소식",
    "선물하기",
  ];

  return (
    <GnbWrap isOpen={isOpen}>
      <Gnb>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              onClick={() => handleClick(index)}
              data-active={activeIndex === index} // React가 허용하는 data-* 속성 사용
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </Gnb>
    </GnbWrap>
  );
};

export default GnbWrapper;
