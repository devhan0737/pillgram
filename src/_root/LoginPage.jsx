import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 100%;
  padding-top: 56px;
`;
const LoginWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
`;
const LoginCard = styled.div`
  padding-top: 64px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  img {
    width: 140px;
    height: 70px;
  }
  p {
    margin: 0;
    color: #757575;
    font-size: 1.4rem;
  }
`;
const Login = styled.form`
  margin-top: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 12px;
  border: 1px solid ${(props) => props.bgColor};
  color: ${(props) => props.font_color};
  width: 100%;
  padding: 14px 12px 12px;
  background: ${(props) => props.bgColor || "#000"};
  border-radius: 10px;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
`;
const ToggleSection = styled.div`
  padding-top: 24px;
  width: 100%;
  display: ${(props) =>
    props.isVisible ? "flex" : "none"}; // 수정 3: 조건부 display 처리
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

const IdInput = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  transition: all 0.1s ease-in-out;
`;
const PwInput = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  transition: all 0.1s ease-in-out;
`;
const LoginButton = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  transition: all 0.1s ease-in-out;
`;
const About = styled.ul`
  padding: 0;
  margin: 56px 0 0 0;
  display: flex;
  justify-content: center;
  gap: 24px;
  color: #757575;
  font-size: 1.4rem;
  li {
    position: relative;
  }
  li:nth-child(2)::before,
  li:nth-child(3)::before {
    content: "";
    background: #757575;
    width: 1px;
    height: 15px;
    display: block;
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LoginPage = () => {
  const buttonArr = [
    {
      id: 1,
      title: "카카오",
      img: "icon_kakao_black",
      href: "#kakao",
      color: "#fee500",
      font_color: "#222222",
    },
    {
      id: 2,
      title: "네이버",
      img: "icon_naver_white",
      href: "#naver",
      color: "#03c75a",
      font_color: "#ffffff",
    },
    {
      id: 3,
      title: "이메일",
      img: "icon_email_gray",
      href: "#email",
      color: "#f8f9fa",
      font_color: "#757575",
    },
  ];
  const [showEmailLogin, setShowEmailLogin] = useState(false);

  const handleEmailLoginToggle = () => {
    event.preventDefault();
    setShowEmailLogin((prev) => !prev);
  };

  return (
    <Container>
      <LoginWrapper>
        <LoginCard>
          <MainLogo>
            <a href="#">
              <img src="/public/logo1.svg" alt="로고" />
            </a>
            <p>필요한 것만, 필요한 만큼만</p>
          </MainLogo>
          <Login action="" method="post">
            <ButtonWrapper>
              {buttonArr.map((item) => (
                <Button
                  key={item.id}
                  bgColor={item.color}
                  font_color={item.font_color}
                  onClick={
                    item.title === "이메일" ? handleEmailLoginToggle : null
                  }
                >
                  <img src={`/public/${item.img}.svg`} alt="아이콘" />
                  <a href={item.href}>{item.title}로 계속하기</a>
                </Button>
              ))}
            </ButtonWrapper>
            <ToggleSection isVisible={showEmailLogin}>
              <IdInput
                type="text"
                name="userName"
                placeholder="아이디를 입력해주세요"
              />
              <PwInput
                type="password"
                name="userPassword"
                placeholder="비밀번호를 입력해주세요"
              />
              <LoginButton type="submit" value="로그인" />
            </ToggleSection>

            <About>
              <li>
                <a href="#">이메일 찾기</a>
              </li>
              <li>
                <a href="#">비밀번호 재설정</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
            </About>
          </Login>
        </LoginCard>
      </LoginWrapper>
    </Container>
  );
};

export default LoginPage;
