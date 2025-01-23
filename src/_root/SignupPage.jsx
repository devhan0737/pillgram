import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const SignupWrapper = styled.section`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
`;
const MainLogo = styled.div`
  padding-top: 56px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 120px;
    height: 36px;
  }
`;
const JoinSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  h2 {
    font-size: 2.6rem;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
const InputGroupWrapper = styled.form`
  width: 100%;
`;
const InputGroup = styled.ul`
  padding: 0;
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const InputFeild = styled.li`
  height: 56px;
  position: relative;
  display: flex;
  width: 100%;
  label {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    color: #aaaaaa;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  button {
    width: 92px;
    height: 40px;
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translate(0, -50%);
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0;
    background: #d0d0d0d0;
    color: white;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 24px 48px 8px 20px;
  transition: all linear 0.2s;
`;
const SignupPage = () => {
  const InputFeildArr = [
    { id: "1", label: "이름", type: "text" },
    { id: "2", label: "이메일 주소", type: "email" },
    { id: "3", label: "비밀번호", type: "password" },
    { id: "4", label: "비밀번호 재확인", type: "password" },
    {
      id: "5",
      label: "휴대폰 번호 (예 : 01012345678)",
      type: "tel",
      buttonText: "인증번호 받기",
    },
    { id: "6", label: "인증번호", type: "text", buttonText: "인증번호 확인" },
    { id: "7", label: "생년월일", type: "text" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 처리
    console.log("회원가입 데이터 제출");
  };

  const handleButtonClick = (id) => {
    if (id === "5") {
      console.log("휴대폰 번호 인증 요청 클릭");
    } else if (id === "6") {
      console.log("인증번호 확인 버튼 클릭");
    }
  };

  return (
    <Container>
      <SignupWrapper>
        <MainLogo>
          <img src="/public/logo1.svg" alt="" />
        </MainLogo>
        <JoinSection>
          <h2>회원가입</h2>
          <p>처음이신 고객님을 위해 가입을 진행합니다</p>
        </JoinSection>
        <InputGroupWrapper onSubmit={handleSubmit}>
          <InputGroup>
            {InputFeildArr.map((feild) => (
              <InputFeild key={feild.id}>
                <label htmlFor={feild.id}>{feild.label}</label>
                <InputWrapper>
                  <Input
                    type={feild.type}
                    id={feild.id}
                    placeholder={feild.placeholder}
                    required
                  />
                  {feild.buttonText && (
                    <button
                      type="button"
                      onClick={() => handleButtonClick(feild.id)}
                    >
                      {feild.buttonText}
                    </button>
                  )}
                </InputWrapper>
              </InputFeild>
            ))}
          </InputGroup>
        </InputGroupWrapper>
      </SignupWrapper>
    </Container>
  );
};

export default SignupPage;
