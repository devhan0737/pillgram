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
  display: ${(props) => (props.hide === "true" ? "none" : "flex")};
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
const Dim = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 65px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 999;
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

  const hideFooter = ["/login", "/SignupPage"].some((path) =>
    location.pathname.includes(path)
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggling menu", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Container hide={hideFooter ? "true" : "false"}>
      <Dim isOpen={isMenuOpen} onClick={toggleMenu} />
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
