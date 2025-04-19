import React, { useState } from "react";
import styled from "styled-components";
import { LogoIcon } from "../assets/theme";

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

const InputField = styled.li`
  width: 100%;
  height: 56px;
  position: relative;
  display: flex;
  flex-direction: column;
  label {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    color: #aaaaaa;
    transition: all 0.1s ease-in-out;
  }
  input:focus + label,
  input:not(:empty) + label {
    transition: all 0.1s ease-in-out;
    top: 8px;
    left: 20px;
    font-size: 12px;
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
    background: #d0d0d0;
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

// --------------------------------본문---------------------------------------

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    verificationCode: "",
    birthDate: "",
  });

  const [errors, setErrors] = useState({});

  const validators = {
    name: (value) => (value.trim() ? "" : "이름을 입력해주세요."),
    email: (value) =>
      /\S+@\S+\.\S+/.test(value) ? "" : "올바른 이메일 주소를 입력해주세요.",
    password: (value) =>
      value.length >= 5 ? "" : "비밀번호는 5자 이상이어야 합니다.",
    confirmPassword: (value) =>
      value === formData.password ? "" : "비밀번호가 일치하지 않습니다.",
    phone: (value) =>
      /^010\d{8}$/.test(value) ? "" : "휴대폰 번호는 - 없이 적어주세요.",
    verificationCode: (value) =>
      value.trim() ? "" : "인증번호를 입력해주세요.",
    birthDate: (value) =>
      /^\d{4}-\d{2}-\d{2}$/.test(value) ? "" : "생년월일을 입력해주세요.",
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const validate = validators[key];
      if (validate) {
        const errorMessage = validate(formData[key]);
        if (errorMessage) newErrors[key] = errorMessage;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("회원가입 성공:", formData);
      alert("회원가입 성공!");
    } else {
      console.log("유효성 검사 실패:", newErrors);
    }
  };
  const handleButtonClick = (id) => {
    if (id === "5") {
      console.log("휴대폰 번호 인증 요청 클릭");
    } else if (id === "6") {
      console.log("인증번호 확인 버튼 클릭");
    }
  };
  const InputFieldArr = [
    { id: "name", label: "이름", type: "text" },
    { id: "email", label: "이메일 주소", type: "email" },
    { id: "password", label: "비밀번호", type: "password" },
    { id: "confirmPassword", label: "비밀번호 재확인", type: "password" },
    {
      id: "phone",
      label: "휴대폰 번호 (예 : 01012345678)",
      type: "tel",
      buttonText: "인증번호 받기",
    },
    {
      id: "verificationCode",
      label: "인증번호",
      type: "text",
      buttonText: "인증번호 확인",
    },
    { id: "birthDate", label: "생년월일", type: "text" },
  ];

  return (
    <Container>
      <SignupWrapper>
        <JoinSection>
          <h2>회원가입</h2>
          <p>처음이신 고객님을 위해 가입을 진행합니다</p>
        </JoinSection>
        <InputGroupWrapper onSubmit={handleSubmit}>
          <InputGroup>
            {InputFieldArr.map((field) => (
              <InputField key={field.id}>
                <label htmlFor={field.id}>{field.label}</label>
                <InputWrapper>
                  <Input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                  />
                  {field.buttonText && (
                    <button
                      type="button"
                      onClick={() => handleButtonClick(field.id)}
                    >
                      {field.buttonText}
                    </button>
                  )}
                </InputWrapper>
                {errors[field.id] && (
                  <p style={{ color: "red" }}>{errors[field.id]}</p>
                )}
              </InputField>
            ))}
          </InputGroup>
        </InputGroupWrapper>
      </SignupWrapper>
    </Container>
  );
};

export default SignupPage;
