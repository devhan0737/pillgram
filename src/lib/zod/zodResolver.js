import { z } from "zod";

export const SIGNUP_ZOD = z
  .object({
    name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다."),
    email: z.string().email("올바른 이메일 형식을 입력해주세요."),
    password: z
      .string()
      .min(8, "비밀번호는 최소 8자 이상입니다.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "영문, 숫자, 특수문자를 포함해야 합니다."
      ),
    confirmPassword: z.string().min(8, "비밀번호 확인은 최소 8자 이상입니다"),
    phone: z
      .string()
      .regex(/^010\d{7,8}$/, "올바른 휴대폰 번호를 입력해주세요."),
    birth: z
      .string()
      .regex(
        /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
        "올바른 생년월일(YYYYMMDD)을 입력해주세요."
      ),
    allAgree: z.boolean(),
    terms: z.boolean().refine((val) => val === true, {
      message: "서비스 이용약관에 동의해야 합니다.",
    }),
    personalInfo: z.boolean().refine((val) => val === true, {
      message: "개인정보 수집 및 이용에 동의해야 합니다.",
    }),
    marketing: z.boolean(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  })
  .refine(
    (data) => {
      // ✅ allAgree가 true면 필수 항목(terms, personalInfo)만 true여야 함
      if (data.allAgree) {
        return data.terms && data.personalInfo;
      }
      return true;
    },
    {
      path: ["allAgree"],
      message: "모두 동의하기를 선택하면 필수 항목에 동의해야 합니다.",
    }
  );
