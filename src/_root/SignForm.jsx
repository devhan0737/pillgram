import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { INPUT_FIELD_ARR } from "../assets/join-static-values";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    color: ${({ hasError }) => (hasError ? "red" : "black")};
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
  span {
    color: red;
    font-size: 1.4rem;
    margin-top: 4px;
  }
`;

const schema = z.object({
  name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다."),
  email: z.string().email("올바른 이메일 형식을 입력해주세요."),
  password: z
    .string()
    .min(8, "비밀번호는 최소 8자 이상입니다.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "영문, 숫자, 특수문자를 포함해야 합니다."
    ),
  confirmPassword: z
    .string()
    .min(8, "비밀번호 확인은 최소 8자 이상입니다")
    .refine(
      (val, ctx) => val === ctx.parent.password,
      "비밀번호가 일치하지 않습니다"
    ),
  phone: z.string().regex(/^010\d{7,8}$/, "올바른 휴대폰 번호를 입력해주세요."),
  birth: z
    .string()
    .regex(
      /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
      "올바른 생년월일(YYYYMMDD)을 입력해주세요."
    ),
});

const SignForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = (data) => {
    console.log("폼 데이터:", data); // 여기서 콘솔 로그 확인

    alert("회원가입이 완료되었습니다.");
  };
  return (
    <Container>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        {INPUT_FIELD_ARR.map((field) => {
          const hasError = errors[field.id];
          return (
            <InputField key={field.id} isvalid={hasError}>
              <InputWrapper isvalid={hasError}>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder=""
                  {...register(field.id, field.validation)}
                />
                <label htmlFor={field.id}>{field.label}</label>
                {field.buttonText && <button>{field.buttonText}</button>}
              </InputWrapper>
              {hasError && <span>{hasError.message}</span>}
            </InputField>
          );
        })}
        <button type="submit">가입하기</button>
      </FormBox>
    </Container>
  );
};

export default SignForm;
