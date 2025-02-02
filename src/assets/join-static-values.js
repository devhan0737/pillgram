export const INPUT_FIELD_ARR = [
  {
    id: "name",
    label: "이름",
    type: "text",
    validation: {
      required: "이름을 입력해주세요.",
      minLength: { value: 2, message: "이름은 최소 2자 이상 입력해야 합니다." },
    },
  },
  {
    id: "email",
    label: "이메일 주소",
    type: "email",
    validation: {
      required: "이메일을 입력해주세요.",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "올바른 이메일 형식을 입력해주세요.",
      },
    },
  },
  {
    id: "password",
    label: "비밀번호",
    type: "password",
    validation: {
      required: "비밀번호를 입력해주세요.",
      minLength: {
        value: 8,
        message: "비밀번호는 최소 8자 이상 입력해야 합니다.",
      },
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        message: "영문, 숫자, 특수문자를 포함해야 합니다.",
      },
    },
  },
  {
    id: "confirmPassword",
    label: "비밀번호 재확인",
    type: "password",
    validation: {
      required: "비밀번호 확인을 입력해주세요.",
      validate: (value, formValues) =>
        value === formValues.password || "비밀번호가 일치하지 않습니다.",
    },
  },
  {
    id: "phone",
    label: "휴대폰 번호",
    type: "tel",
    buttonText: "인증번호 받기",
    validation: {
      required: "휴대폰 번호를 입력해주세요.",
      pattern: {
        value: /^010\d{7,8}$/,
        message: "올바른 휴대폰 번호를 입력해주세요.",
      },
    },
  },
  {
    id: "verificationCode",
    label: "인증번호",
    type: "text",
    buttonText: "인증번호 확인",
    validation: {
      required: "인증번호를 입력해주세요.",
      minLength: { value: 6, message: "인증번호는 6자리여야 합니다." },
      maxLength: { value: 6, message: "인증번호는 6자리여야 합니다." },
    },
  },
  {
    id: "birth",
    label: "생년월일",
    type: "text",
    validation: {
      required: "생년월일을 입력해주세요.",
      pattern: {
        value: /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
        message: "올바른 생년월일(YYYYMMDD)을 입력해주세요.",
      },
    },
  },
];
