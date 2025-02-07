import React, { useState, useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const KakaoLoginWrapper = styled.div`
  width: 100%;
`;

const SocialKakao = () => {
  const naviate = useNavigate();

  const [loginResult, setLoginResult] = useState(false);

  // 로그인 성공 시
  const kakaoOnSuccess = (response) => {
    console.log("Login Success:", response);
    setLoginResult(true);
    naviate("/");
  };

  // 로그인 실패 시
  const kakaoOnFailure = (error) => {
    console.error("Login Failed:", error);
    setLoginResult(false);
  };

  return (
    <KakaoLoginWrapper>
      {loginResult ? (
        " 로그인이 완료되었습니다."
      ) : (
        <KakaoLogin
          token={import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY} // 환경 변수에서 불러오기
          onSuccess={(response) => {
            kakaoOnSuccess(response);
          }}
          onFail={(error) => {
            kakaoOnFailure(error);
          }}
          onLogout={() => console.log("로그아웃")}
          render={({ onClick }) => (
            <button
              onClick={onClick}
              style={{
                backgroundColor: "#FEE500",
                border: "none",
                padding: "10px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <img
                src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_large_wide.png"
                alt="카카오 로그인"
                style={{ width: "200px" }}
              />
            </button>
          )}
        />
      )}
    </KakaoLoginWrapper>
  );
};

export default SocialKakao;
