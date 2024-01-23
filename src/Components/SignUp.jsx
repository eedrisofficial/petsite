import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupValidation } from "./validations/SignUp";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: signupValidation,

    onSubmit: (values, { resetForm }) => {},
  });
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center gap-10 w-[100%] p-3">
        <section className="hidden lg:flex bg-black/70 relative lg:w-[50%] h-screen">
          <img
            src="https://images.pexels.com/photos/17502287/pexels-photo-17502287/free-photo-of-macaw-parrot-with-blue-and-yellow-feathers.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full"
          />
        </section>

        <section className="w-[80%] lg:w-[50%]">
          <h1 className="font-bold text-[2rem] ">Create Account </h1>
          <form action="" className="mt-6 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="h-[56px] p-3 w-[100%] md:w-[80%] lg:w-[80%] border border-[#636363]  rounded-lg   placeholder:text-[#b6b3b3] focus:shadow-none focus:outline-none   focus:border-[#FFBD59]  "
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-sm text-red-800">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-1 mt-4 relative">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter password "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="p-3 h-[56px] w-full md:w-[80%] lg:w-[80%] border border-[#636363]   rounded-lg placeholder:text-[#b6b3b3]  focus:shadow-none focus:outline-none  focus:border-[#FFBD59]  "
                required
              />
              <button
                type="button"
                className="absolute right-[1.6rem] lg:right-32 top-[70%] transform -translate-y-1/2 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-sm text-red-800">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-1 mt-4 relative">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="p-3 h-[56px] w-full md:w-[80%] lg:w-[80%] border border-[#636363]   rounded-lg placeholder:text-[#b6b3b3]  focus:shadow-none focus:outline-none  focus:border-[#FFBD59]  "
                required
              />
              <button
                type="button"
                className="absolute  right-[1.6rem] top-[70%] transform -translate-y-1/2 focus:outline-none lg:right-32"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-sm text-red-800">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <button className="mt-4 rounded-lg bg-[#2C3639] w-full lg:w-[25%] text-[#FFFFFF] text-[18px] font-bold px-2 py-1 hover:bg-indigo-950  duration-500">
              Sign up
            </button>
          </form>
          <p className="mt-5 font-medium">
            Already have an account ?{" "}
            <Link to="/signin" className="hover:underline text-red-500">
              Sign in here
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
