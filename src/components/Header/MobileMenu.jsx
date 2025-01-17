import React from "react";
import styled from "styled-components";
import { mq, IsDesktop } from "../../lib/media-query/mediaQuery";

const MobileMenuWrapper = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* ${mq("desktop")} {
      display: none;
    } */
    img {
      display: block;
      width: 24px;
      height: auto;
    }
  }
`;

const MobileMenu = ({ onClick }) => {
  return (
    <MobileMenuWrapper onClick={onClick}>
      <a href="#">
        <img src="/public/menu-line.svg" alt="" />
      </a>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
