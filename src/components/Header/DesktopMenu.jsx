import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
`;
const IconWrap = styled.ul`
  width: 100%;
  display: flex;
  gap: 16px;
  li {
    width: auto;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const DesktopMenu = () => {
  return (
    <Container>
      <IconWrap>
        <li>
          <a href="#">
            <img src="../../../public/shoppingbag.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="/login">
            <img src="../../../public/user.svg" alt="" />
          </a>
        </li>
      </IconWrap>
    </Container>
  );
};

export default DesktopMenu;
