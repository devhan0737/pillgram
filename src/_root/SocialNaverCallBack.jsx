import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SocialNaverCallBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "YOUR_CLIENT_ID",
    });

    naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log("사용자 정보:", naverLogin.user);
        // 사용자 정보를 백엔드로 전송하거나 상태에 저장 가능
      }
      navigate("/"); // 로그인 후 홈으로 이동
    });
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
};

export default SocialNaverCallBack;
