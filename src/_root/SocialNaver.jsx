import React from "react";
import NaverLogin from "react-naver-login";

const SocialNaver = () => {
  const handleSuccess = (naverUser) => {
    console.log("네이버 로그인 성공!", naverUser);
    console.log("네이버 유저 정보:", naverUser);
  };

  const handleFailure = (error) => {
    console.error("네이버 로그인 실패:", error);
  };

  return (
    <NaverLogin
      clientId={import.meta.env.VITE_NAVER_JAVASCRIPT_KEY}
      callbackUrl="http://localhost:5173/" // 설정한 콜백 URL
      render={(props) => (
        <button
          onClick={props.onClick}
          style={{
            backgroundColor: "#03C75A",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          네이버 로그인
        </button>
      )}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
    />
  );
};

export default SocialNaver;
