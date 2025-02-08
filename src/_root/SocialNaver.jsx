import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  border: 1px solid #03c75a;
  color: #fff;
  width: 100%;
  padding: 14px 12px 12px;
  background: #03c75a;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #02b053;
  }
`;
const SocialNaver = () => {
  useEffect(() => {
    const { naver } = window;

    const naverLogin = new naver.LoginWithNaverId({
      clientId: import.meta.env.VITE_NAVER_JAVASCRIPT_KEY, // 네이버에서 발급받은 Client ID
      callbackUrl: "http://localhost:5173/", // 설정한 Callback URL
      isPopup: false,
      loginButton: { display: "none" },
    });

    naverLogin.init();
  }, []);

  const handleNaverLogin = () => {
    document.getElementById("naverIdLogin").firstChild.click(); // 네이버 기본 버튼 클릭
  };

  return (
    <Container>
      <div id="naverIdLogin" style={{ display: "none" }}></div>
      <CustomButton onClick={handleNaverLogin}>
        <img src="/public/icon_naver_white.svg" alt="" />
        네이버로 계속하기
      </CustomButton>
    </Container>
  );
};

export default SocialNaver;
