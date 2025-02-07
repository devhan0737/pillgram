import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BUTTON_ARR } from "../assets/static-values";
// --------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 56px;
`;

const LoginWrapper = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: center;
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
  position: relative;
  padding: 24px 48px 8px 20px;
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid ${(props) => (props.error ? "red" : "#dddddd")};
  border-radius: 8px;
  transition: all 0.1s ease-in-out;

  &:focus {
    border-color: ${(props) =>
      props.error ? "red" : "#2aad5c"}; // 에러 시 빨간색 유지, 아니면 파란색
    outline: none; // 기본 브라우저 outline 제거
  }
`;

const PwInput = styled.input`
  position: relative;
  width: 100%;
  height: 56px;
  padding: 24px 48px 8px 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid ${(props) => (props.error ? "red" : "#dddddd")};
  border-radius: 8px;
  transition: all 0.1s ease-in-out;

  &:focus {
    border-color: ${(props) =>
      props.error ? "red" : "#2aad5c"}; // 에러 시 빨간색 유지, 아니면 파란색
    outline: none; // 기본 브라우저 outline 제거
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  label {
    z-index: 2;
    position: absolute;
    top: 20px;
    left: 30px;
    color: ${(props) => (props.error ? "red" : "#757575")};
  }
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

  &:hover {
    background: linear-gradient(96deg, #1dc25c 5.56%, #2aad5c 61.87%);
    color: #fff;
    transition: all 0.1s ease-in-out;
  }
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

// --------------------------------본문---------------------------------------

const LoginPage = () => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState({ userName: "", userPassword: "" });

  const navigate = useNavigate(); // 페이지 이동을 위한 Hook

  // 로그인 폼 토글 기능
  const handleEmailLoginToggle = (event) => {
    setShowEmailLogin((prev) => !prev); // 이메일 로그인 폼 Show/Hide
  };

  // 개별 입력값 검증
  const handleInputChange = (field, value) => {
    // 입력값 업데이트
    if (field === "userName") setUserName(value);
    if (field === "userPassword") setUserPassword(value);

    // 에러 상태 업데이트 (유효하면 에러를 초기화)
    setError((prev) => {
      const newErrors = { ...prev };

      if (field === "userName") {
        if (!value) {
          newErrors.userName = "아이디를 입력해주세요.";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          newErrors.userName = "유효한 이메일 형식이 아닙니다.";
        } else {
          newErrors.userName = ""; // 에러 초기화
        }
      }

      if (field === "userPassword") {
        if (!value) {
          newErrors.userPassword = "비밀번호를 입력해주세요.";
        } else if (userPassword.length < 4) {
          newErrors.userPassword = "비밀번호가 너무 짧습니다";
        } else if (!/\d/.test(userPassword)) {
          newErrors.userPassword =
            "비밀번호는 1개 이상의 숫자를 포함해야 합니다.";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(userPassword)) {
          newErrors.userPassword =
            "비밀번호는 1개 이상의 기호를 포함해야 합니다.";
        } else {
          newErrors.userPassword = ""; // 에러 초기화
        }
      }

      return newErrors;
    });
  };

  const validateInputs = () => {
    let isValid = true; // 초기값을 참으로 설정
    const newErrors = { userName: "", userPassword: "" }; // 에러 메세지 저장

    // 아이디 검증
    if (!userName) {
      // 아이디 입력칸이 비어 있을 경우
      isValid = false; // isValid를 false로 변환
      newErrors.userName = "아이디를 입력해주세요."; // 아이디가 비어있으면 오류 메시지
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userName)
    ) {
      // 아이디가 이메일 형식이어야 한다는 설정
      isValid = false; // isValid를 false로 변환
      newErrors.userName = "유효한 이메일 형식이 아닙니다."; // 아이디 형식이 잘못되었을 때 오류 메시지
    }

    // 비밀번호 검증
    if (!userPassword) {
      // 비밀번호 입력칸이 비어 있을 경우
      isValid = false; // isValid를 false로 변환
      newErrors.userPassword = "비밀번호를 입력해주세요."; // 비밀번호가 비어있으면 오류 메시지
    } else if (userPassword.length < 4 || value.length > 20) {
      //비밀번호가 짧은 경우
      isValid = false;
      newErrors.userPassword = "비밀번호가 너무 짧습니다";
    } else if (!/\d/.test(userPassword)) {
      //비밀번호가 짧은 경우
      isValid = false;
      newErrors.userPassword = "비밀번호는 1개 이상의 숫자를 포함해야 합니다";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(userPassword)) {
      //비밀번호가 짧은 경우
      isValid = false;
      newErrors.userPassword =
        "비밀번호는 1개 이상의 특수문자를 포함해야 합니다";
    }

    // 에러 상태 업데이트
    setError(newErrors);

    // 검증이 끝났으면 isValid 반환 (true면 유효한 값, false면 오류 있음)
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    if (validateInputs()) {
      // 유효성 검사 통과 시 동작
      if (userName === "testUser" && userPassword === "testPass") {
        alert("로그인 성공!");
        navigate("/");
      } else {
        setError((prev) => ({
          ...prev,
          form: "아이디 또는 비밀번호가 올바르지 않습니다.",
        }));
      }
    }
  };

  return (
    <Container>
      <LoginWrapper>
        <LoginCard>
          <MainLogo>
            <a href="/">
              <img src="/logo1.svg" alt="로고" />
            </a>
            <p>필요한 것만, 필요한 만큼만</p>
          </MainLogo>

          <Login action="#" method="post" onSubmit={handleSubmit}>
            <ButtonWrapper>
              {BUTTON_ARR.map((item) => (
                <Button
                  key={item.id}
                  bgColor={item.color}
                  font_color={item.font_color}
                  onClick={
                    item.title === "이메일" ? handleEmailLoginToggle : null
                  }
                >
                  <img src={`/${item.img}.svg`} alt="아이콘" />

                  <a href={item.href}>{item.title}로 계속하기</a>
                </Button>
              ))}
            </ButtonWrapper>

            <ToggleSection isVisible={showEmailLogin}>
              <InputWrapper>
                <IdInput
                  type="text"
                  value={userName}
                  onChange={(e) =>
                    handleInputChange("userName", e.target.value)
                  }
                  error={!!error.userName}
                  placeholder=""
                />
                <label>아이디를 입력해주세요</label>

                {error.userName && (
                  <ErrorMessage>{error.userName}</ErrorMessage>
                )}
              </InputWrapper>

              <InputWrapper>
                <PwInput
                  type="password"
                  value={userPassword}
                  onChange={(e) =>
                    handleInputChange("userPassword", e.target.value)
                  }
                  error={!!error.userPassword}
                  placeholder=""
                />
                <label>비밀번호를 입력해주세요</label>
                {error.userPassword && (
                  <ErrorMessage>{error.userPassword}</ErrorMessage>
                )}
              </InputWrapper>

              <LoginButton
                type="submit"
                value="로그인"
                onSubmit={handleSubmit}
              />
            </ToggleSection>

            <About>
              <li>
                <a href="#">이메일 찾기</a>
              </li>
              <li>
                <a href="#">비밀번호 재설정</a>
              </li>
              <li>
                <a href="/SignupPage">회원가입</a>
              </li>
            </About>
          </Login>
        </LoginCard>
      </LoginWrapper>
    </Container>
  );
};

export default LoginPage;
