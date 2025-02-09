import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { INPUT_FIELD_ARR } from "../assets/join-static-values";
import { zodResolver } from "@hookform/resolvers/zod";
import { SIGNUP_ZOD } from "../lib/zod/zodResolver";
import AgreementForm from "./Agree";

const Container = styled.div`
  max-width: 430px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  label {
    color: ${({ hasError }) => (hasError ? "red" : "#aaaaaa")};
    z-index: 2;
    position: absolute;
    top: 18px;
    left: 24px;
    font-size: 1.6rem;
    transition: all 0.3s ease-in-out;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 8px;
    left: 16px;
    font-size: 12px;
    color: #aaaaaa;
  }

  span {
    color: red;
    font-size: 1.4rem;
    margin-top: 4px;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    position: relative;
    border: 1px solid ${({ hasError }) => (hasError ? "red" : "#aaaaaa")};
    border-radius: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    padding: 18px 24px 6px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border: 1px solid green;
      outline: none;
    }
  }

  button {
    box-sizing: border-box;
    width: 92px;
    height: 40px;
    position: absolute;
    top: 8px;
    right: 8px;
    border-radius: 8px;
    border: 1px solid #aaaaaa;
    font-size: 1.4rem;
    color: #fff;
    background-color: #aaaaaa;
  }
`;

// ----------------------본문-------------------------------------------

const SignForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      birth: "",
      checkbox: "",
    },

    resolver: zodResolver(SIGNUP_ZOD),
    mode: "onBlur",
  });

  // form 데이터 제출 기능
  const onSubmit = (data) => {
    console.log("폼 데이터:", data); // 여기서 콘솔 로그 확인

    alert("회원가입이 완료되었습니다."); // 회원가입 성공시 뜨는 알림창
  };

  return (
    <Container>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        {INPUT_FIELD_ARR.map((field) => {
          const hasError = errors[field.id];

          return (
            <InputField key={field.id} hasError={hasError}>
              <InputWrapper hasError={hasError}>
                <input
                  id={field.id}
                  type={field.type}
                  required={true}
                  placeholder=""
                  {...register(field.id, {
                    required: "값을 입력해주세요",
                    ...field.validation,
                  })}
                />

                <label htmlFor={field.id}>{field.label}</label>

                {field.buttonText && <button>{field.buttonText}</button>}
              </InputWrapper>

              {hasError && <span>{hasError.message}</span>}
            </InputField>
          );
        })}

        <AgreementForm register={register} setValue={setValue} watch={watch} />
        <button type="submit">가입하기</button>
      </FormBox>
    </Container>
  );
};

export default SignForm;
