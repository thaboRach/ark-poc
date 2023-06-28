import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  rememberMe: Yup.boolean(),
});

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This is required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This is required"),
  emailAddress: Yup.string()
    .email("Invalid email")
    .required("This is required"),
  confirmPassword: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This is required"),
  dateOfBirth: Yup.string().required(),
  agreeToTerms: Yup.boolean().oneOf([true], "terms and conditions is required"),
});
