import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AGREEMENTS } from "../assets/small-Check-Box";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TopCheckbox = styled.div`
  display: block;
  box-sizing: border-box;
  font-weight: 700;
  line-height: 32px;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 16px;
`;
const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid #ddd;
`;

const AgreementForm = ({ register, setValue, watch }) => {
  // 모든 체크박스가 체크되었는지 확인
  const allChecked = AGREEMENTS.every(({ id }) => watch(id));

  // 일부 체크박스가 체크되었는지 확인
  const someChecked = AGREEMENTS.some(({ id }) => watch(id));

  // "모두 동의하기" 체크박스 클릭 시 모든 체크박스를 변경하는 함수
  const handleAllAgree = () => {
    const newState = !allChecked; // 현재 allChecked 상태를 반전
    AGREEMENTS.forEach(({ id }) => setValue(id, newState)); // 모든 체크박스의 상태를 변경
  };

  return (
    <FormContainer>
      <TopCheckbox>
        <input type="checkbox" checked={allChecked} onChange={handleAllAgree} />

        <label>모두 동의하기</label>
      </TopCheckbox>

      <Divider />

      {AGREEMENTS.map(({ id, label }) => (
        <Checkbox key={id}>
          <input
            type="checkbox"
            {...register(id)}
            onChange={(e) => {
              // 개별 체크박스 상태 변경 시 적용
              setValue(id, e.target.checked);
            }}
          />

          <label>{label}</label>
        </Checkbox>
      ))}
    </FormContainer>
  );
};

export default AgreementForm;
