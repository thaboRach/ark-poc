export interface ILoginForm {
  firstName: string;
  password: string;
  rememberMe: boolean;
}

export interface ISignUpForm {
  firstName: string;
  password: string;
  confirmPassword: string;
  emailAddress: string;
  preferredCodingLanguage: string;
  dateOfBirth: string;
  agreeToTerms: boolean;
}
