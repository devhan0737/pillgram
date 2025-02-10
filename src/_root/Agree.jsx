import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AGREEMENTS } from "../assets/small-Check-Box";

const checkedImg = "/public/agree_chk_on.svg";
const uncheckedImg = "/public/agree_chk.svg"; // 비활성화된 이미지 경로가 잘못되어 있어 수정

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
  cursor: pointer;
`;
const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid #ddd;
`;

const CheckboxImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const AgreementForm = ({ register, setValue, watch }) => {
  // 모든 체크박스가 체크되었는지 확인
  const allChecked = AGREEMENTS.every(({ id }) => watch(id));

  // 일부 체크박스가 체크되었는지 확인
  const someChecked = AGREEMENTS.some(({ id }) => watch(id));

  // "모두 동의하기" 체크박스 클릭 시 모든 체크박스를 변경하는 함수
  const handleAllAgree = () => {
    const newState = !watch("allAgree"); // 현재 상태 반전
    AGREEMENTS.forEach(({ id }) => {
      setValue(id, newState, { shouldValidate: true }); // 모든 체크박스 변경 + 즉시 검증
    });
    setValue("allAgree", newState, { shouldValidate: true }); // "모두 동의하기" 값도 함께 변경
  };

  // 개별 체크박스가 변경될 때 "모두 동의하기" 체크 여부 업데이트
  useEffect(() => {
    const isAllChecked = AGREEMENTS.every(({ id }) => watch(id)); // 모든 항목 체크 확인
    setValue("allAgree", isAllChecked); // "모두 동의하기" 업데이트
  }, [AGREEMENTS.map(({ id }) => watch(id))]); // watch 값들만 의존성 배열에 추가

  return (
    <FormContainer>
      <Divider />

      <TopCheckbox onClick={handleAllAgree}>
        <CheckboxImage
          src={watch("allAgree") ? checkedImg : uncheckedImg}
          alt="모두 동의하기"
          onClick={(e) => {
            e.stopPropagation();
            handleAllAgree();
          }}
        />

        <label>모두 동의하기</label>
      </TopCheckbox>

      {AGREEMENTS.map(({ id, label }) => (
        <Checkbox key={id}>
          <input
            type="checkbox"
            id={id}
            {...register(id)}
            onChange={(e) => {
              setValue(id, e.target.checked, { shouldValidate: true }); // 개별 체크박스 상태 변경 시 적용
            }}
          />

          <label htmlFor={id}>{label}</label>
        </Checkbox>
      ))}
    </FormContainer>
  );
};

export default AgreementForm;
