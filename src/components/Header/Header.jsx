import React, { useState } from "react";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import GnbWrapper from "./GnbWrapper";
import DesktopMenu from "./desktopmenu";
import {
  IsDesktop,
  IsTablet,
  IsMobile,
} from "../../lib/media-query/mediaQuery";
import { useLocation } from "react-router-dom";

const Container = styled.header`
  max-width: 100%;
  display: ${(props) => (props.hide ? "none" : "flex")};
  justify-content: center;
  height: 64px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-bottom: 1px solid #2aad5c;
  position: fixed;
  z-index: 1000;
  top: 0;
  background: #fff;
`;

const Nav = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  padding-left: 12px;
  display: flex;
  width: auto;
  height: auto;
  a {
    width: 92px;
    height: 48px;
    display: flex;
    align-items: center;
    background: url("../../public/logo1.svg") no-repeat 50% 50%;
  }
`;

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  const hideFooter = ["/login", "/SignupPage"].some((path) =>
    location.pathname.includes(path)
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggling menu", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Container hide={hideFooter}>
      <Nav>
        <Logo>
          <a href="/"></a>
        </Logo>
        <GnbWrapper isOpen={isMenuOpen} />

        <IsMobile>
          <MobileMenu onClick={toggleMenu} />
        </IsMobile>

        <IsTablet>
          <MobileMenu onClick={toggleMenu} />
        </IsTablet>

        <IsDesktop>
          <DesktopMenu />
        </IsDesktop>
      </Nav>
    </Container>
  );
};

export default Header;
