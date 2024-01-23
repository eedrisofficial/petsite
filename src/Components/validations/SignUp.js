import * as yup from "yup";

export const signupValidation = yup.object().shape({
  email: yup
    .string("Invalid email address")
    .email()
    .required(" Please enter a valid email"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password too short")
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number"),
  confirmPassword: yup
    .string()
    .required("confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
