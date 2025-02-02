import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { INPUT_FIELD_ARR } from "../assets/join-static-values";

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  border: 1px solid hotpink;
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
    z-index: 2;
    position: absolute;
    top: 18px;
    left: 24px;
    font-size: 1.6rem;
    color: #aaaaaa;
  }
`;
const InputWrapper = styled.div`
  width: 100%;
  input {
    position: relative;
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
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

const SignForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <FormBox onSubmit={handleSubmit}>
        {INPUT_FIELD_ARR.map((field) => (
          <InputField key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <InputWrapper>
              <input
                id={field.id}
                type={field.type}
                {...register(field.id, field.validation)}
              />
              {field.buttonText && <button>{field.buttonText}</button>}
            </InputWrapper>
            {errors[field.id] && <span>{errors[field.id].message}</span>}
          </InputField>
        ))}
        <button type="submit">가입하기</button>
      </FormBox>
    </Container>
  );
};

export default SignForm;
