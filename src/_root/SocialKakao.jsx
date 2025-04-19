import React, { useState, useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Kakao, kakaoIcon } from "../assets/theme";

const KakaoLoginWrapper = styled.div`
  width: 100%;
  button {
    display: flex;
    justify-content: center;
    gap: 12px;
    border: 1px solid #fee500;
    color: #000;
    width: 100%;
    padding: 14px 12px 12px;
    background: #fee500;
    border-radius: 10px;
    cursor: pointer;
  }
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
            <button onClick={onClick}>
              <img src={kakaoIcon} alt="카카오 아이콘" />
              카카오로 계속하기
            </button>
          )}
        />
      )}
    </KakaoLoginWrapper>
  );
};

export default SocialKakao;
