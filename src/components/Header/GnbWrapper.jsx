import React, { useState } from "react";
import styled from "styled-components";
import { IsDesktop, mq } from "../../lib/media-query/mediaQuery";
import { MENUITEMS } from "../../assets/menu-items";

const GnbWrap = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${({ isopen }) =>
    isopen === "true" ? "translateY(0)" : "translateY(-10px)"};
  opacity: ${({ isopen }) => (isopen === "true" ? 1 : 0)};
  pointer-events: ${({ isopen }) => (isopen === "true" ? "auto" : "none")};
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

const Gnb = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  padding: 8px 24px;
  top: 64px;
  left: 0;
  box-sizing: border-box;
  list-style: none;

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
        color: #2aad5c;
      }

      ${mq("desktop")} {
        font-size: 1.8rem;
      }

      &:hover {
        color: #2aad5c;
      }
    }
  }

  /* 데스크톱에서 숨길 항목 처리 */
  .desktop-hidden {
    ${mq("desktop")} {
      display: none;
    }
  }
`;

const GnbWrapper = ({ isOpen }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <GnbWrap isopen={isOpen ? "true" : "false"}>
      <Gnb>
        {MENUITEMS.map((item, index) => (
          <li
            key={item.id}
            className={item.display === "none" ? "desktop-hidden" : ""} // 데스크톱에서 숨김
          >
            <a
              href={item.href}
              onClick={() => handleClick(index)}
              data-active={activeIndex === index}
            >
              {item.text}
            </a>
          </li>
        ))}
      </Gnb>
    </GnbWrap>
  );
};

export default GnbWrapper;
