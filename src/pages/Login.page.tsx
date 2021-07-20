import React from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const history = useHistory();

  const {
    handleSubmit,
    getFieldProps,
    touched,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      console.log("form submitting", data);
      setTimeout(() => {
        console.log("form submitted successfully");
        history.push("/dashboard");
      }, 5000);
    },
  });

  return (
    <div className="min-h-screen flex flex-grow items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-medium text-gray-900">
            Log In to <span className="text-blue-600">CORK</span>
          </h2>
          <p className="mt-2 text-center text-sm">
            New Here?{" "}
            <Link to="/signup" className="font-medium text-blue-600 underline">
              Create an account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex pt-3 pb-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-blue-600 my-3"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                touched={touched.email}
                error={errors.email}
                {...getFieldProps("email")}
                placeholder="Email address"
              />
            </div>
            <div className="flex pt-3 pb-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-blue-600 my-3"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                touched={touched.password}
                error={errors.password}
                {...getFieldProps("password")}
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <Button theme="primary" Icon={HiLockClosed}>Log in</Button>
            {isSubmitting && <FaSpinner className="animate-spin" />}
          </div>

          <div className="flex flex-col items-center justify-between">
            <div className="flex items-center mt-10">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-400 cursor-pointer"
              >
                Keep me logged in
              </label>
            </div>

            <div className="text-sm w-full text-center mt-5">
              <Link
                to="/forgot-password"
                className="font-medium text-blue-600 tracking-widest"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
        <p className="max-w-md mx-auto text-center pt-10">
          © 2020 All Rights Reserved.{" "}
          <span className="text-blue-600">CORK</span> is a product of
          Designreset. <span className="text-blue-600">Cookie Preferences</span>
          , <span className="text-blue-600">Privacy</span>, and{" "}
          <span className="text-blue-600">Terms</span>.
        </p>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default React.memo(Login);
