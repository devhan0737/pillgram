import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AGREEMENTS } from "../assets/small-Check-Box";

const checkedImg = "/public/agree_chk_on.svg";
const uncheckedImg = "/public/agree_chk.svg";
const singleUncheckedImg = "/public/survey_chk.svg";
const singleCheckedImg = "/public/survey_chk_on.svg";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TopCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-sizing: border-box;
  font-weight: 700;
  line-height: 32px;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  label {
    font-weight: 700;
    line-height: 32px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const AllCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const BottomCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
`;
const EachCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const HiddenCheckbox = styled.input`
  display: none;
`;

const Divider = styled.hr`
  width: 100%;
  border: 0.5px solid #ddd;
`;

const CheckboxImage = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ViewText = styled.span`
  color: #888888;
  cursor: pointer;
  font-size: 14px;
`;

const AgreementForm = ({ register, setValue, watch }) => {
  const allChecked = AGREEMENTS.every(({ id }) => watch(id));

  const handleAllAgree = () => {
    const newState = !watch("allAgree");
    AGREEMENTS.forEach(({ id }) => {
      setValue(id, newState, { shouldValidate: true });
    });
    setValue("allAgree", newState, { shouldValidate: true });
  };

  useEffect(() => {
    const isAllChecked = AGREEMENTS.every(({ id }) => watch(id));
    setValue("allAgree", isAllChecked);
  }, [AGREEMENTS.map(({ id }) => watch(id))]);

  return (
    <FormContainer>
      <Divider />

      <TopCheckbox onClick={handleAllAgree}>
        <AllCheckBox>
          <CheckboxImage
            src={watch("allAgree") ? checkedImg : uncheckedImg}
            alt="모두 동의하기"
          />
          <label>모두 동의하기</label>
        </AllCheckBox>
      </TopCheckbox>

      <BottomCheckBox>
        {AGREEMENTS.map(({ id, label }) => (
          <Checkbox
            key={id}
            onClick={() => setValue(id, !watch(id), { shouldValidate: true })}
          >
            <EachCheckBox>
              <HiddenCheckbox type="checkbox" id={id} {...register(id)} />
              <CheckboxImage
                src={watch(id) ? singleCheckedImg : singleUncheckedImg}
                alt={label}
              />
              <label htmlFor={id}>{label}</label>
            </EachCheckBox>
            <ViewText>보기</ViewText>
          </Checkbox>
        ))}
      </BottomCheckBox>
    </FormContainer>
  );
};

export default AgreementForm;
