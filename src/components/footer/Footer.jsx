import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.hide ? "none" : "flex")};
  padding: 36px 24px;
  position: relative;
  top: 64px;
  background: #353535;
  height: auto;
  color: white;
  font-size: 1.4rem;
`;
const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  a {
    font-weight: 600;
  }
`;
const FooterAdress = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  p {
    margin: 0;
  }
`;
const SnsIcon = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-top: 24px;
  img {
    width: 24px;
    height: 24px;
  }
`;

const Footer = () => {
  const location = useLocation();

  return (
    <Container hide={location.pathname.includes("login")}>
      <FooterContents>
        <FooterInfo>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
          <li>
            <a href="#">고객센터</a>
          </li>
          <li>
            <a href="#">규제특례 고지사항</a>
          </li>
        </FooterInfo>
        <FooterAdress>
          <p>
            제휴문의 : <a href="#">uhi12@naver.com</a>
          </p>
          <p>
            전화 : <a href="#">1644-8743</a>
          </p>
        </FooterAdress>
        <SnsIcon>
          <li>
            <a href="#">
              <img src="/public/icon_sns_blog.svg" alt="블로그 아이콘" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/public/icon_sns_kakao.svg" alt="카카오톡 아이콘" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/public/icon_sns_instar.svg" alt="인스타 아이콘" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/public/icon_sns_youtube.svg" alt="유튜브 아이콘" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/public/icon_sns_google.svg" alt="구글 아이콘" />
            </a>
          </li>
        </SnsIcon>
      </FooterContents>
    </Container>
  );
};

export default Footer;
