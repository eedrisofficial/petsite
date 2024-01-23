import * as yup from "yup";

export const signinValidation = yup.object().shape({
  email: yup
    .string("Invalid email address")
    .email()
    .required(" Please enter a valid email"),
  password: yup.string().required("Please enter a password"),
});
