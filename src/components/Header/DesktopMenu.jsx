import React from "react";
import styled from "styled-components";
import { Shoppingbag, user } from "../../assets/theme";

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
            <img src={Shoppingbag} alt="장바구니 아이콘" />
          </a>
        </li>
        <li>
          <a href="/pillgram/login">
            <img src={user} alt="마이페이지 아이콘" />
          </a>
        </li>
      </IconWrap>
    </Container>
  );
};

export default DesktopMenu;
