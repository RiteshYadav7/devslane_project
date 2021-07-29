import { useFormik } from "formik";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Alerts from "../../components/Alerts/Alerts";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

interface Props {}

const Signup: React.FC<Props> = (props) => {
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
      username: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      username: yup.string().required(),
    }),
    onSubmit: (data) => {
      console.log("form submitting", data);
      setTimeout(() => {
        console.log("form submitted successfully");
        history.push("/dashboard");
      }, 3000);
    },
  });

  return (
    <div className="min-h-screen flex flex-grow items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-medium text-gray-900">
            Get started with a free account
          </h2>
          <p className="mt-2 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-blue-600 underline">
              Log in
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
                id="username"
                type="username"
                autoComplete="username"
                required
                touched={touched.username}
                error={errors.username}
                {...getFieldProps("username")}
                placeholder="Username"
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
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
              </svg>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                touched={touched.email}
                error={errors.email}
                {...getFieldProps("email")}
                placeholder="Email"
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

          <div className="flex flex-col justify-between">
            <div className="flex items-center mt-2">
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
                I agree to the{" "}
                <a href="#" className="text-blue-600">
                  terms and conditions
                </a>
              </label>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
                <p>Show Password</p>
                <label>
                    <input type="checkbox" className="cursor-pointer absolute transition-all ml-2 -mt-1.5" />
                </label>
            </div>
            <div>
            <Button theme="primary">Get Started!</Button>
            {isSubmitting && <FaSpinner className="animate-spin" />}
            </div>
          </div>
        </form>
        <p className="max-w-md mx-auto text-center pt-2">
          © 2020 All Rights Reserved.{" "}
          <span className="text-blue-600">DEVS</span> is a product of
          Designreset. <span className="text-blue-600">Cookie Preferences</span>
          , <span className="text-blue-600">Privacy</span>, and{" "}
          <span className="text-blue-600">Terms</span>.
        </p>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default React.memo(Signup);