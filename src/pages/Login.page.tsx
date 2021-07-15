import React, { ChangeEvent, FocusEvent } from "react";
import { Link } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { useState } from "react";
// import * as yup from "yup";


interface Props {}

const Login: React.FC<Props> = (props) => {

  const [data, setData] = useState({email: "", password: ""});
  const [touched, setTouched] = useState({email: false, password: false});
  // const [submitting, setSubmitting] = useState(false);

  // const history = useHistory();

  // console.log(history);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nameOfChangeInput = event.target.name;
    setData({...data, [nameOfChangeInput]: event.target.value});
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const nameOfBlurredInput = event.target.name;
    setTouched({...touched, [nameOfBlurredInput]: true});
  };

  let emailError = "";
  let passwordError = "";

  // const emailValidator = yup.string().required().email();

  // const passwordValidator = yup.string().required().min(8);

  if(!data.email) {
    emailError = "Email is required";
  } else if (!data.email.endsWith("@gmail.com")) {
    emailError = "Enter a valid email address";
  }

  if(!data.password) {
    passwordError = "Password is required";
  } else if (data.password.length < 8) {
    passwordError = "Password should be of atleast 8 characters";
  }

  return (
    <div className="min-h-screen flex flex-grow items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-medium text-gray-900">
            Log In to <span className="text-blue-600">CORK</span>
          </h2>
          <p className="mt-2 text-center text-sm">
            New Here?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 underline"
            >
              Create an account
            </Link>
          </p>
        </div>
        <form 
          className="mt-8 space-y-6"
          onSubmit={(event) => {
            
            event.preventDefault();

            if(emailError || passwordError) {
              return;
            }

            console.log("logged in data: ", data);

          }}  
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex relative pt-3 pb-7">
              <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600 my-3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="inline-block align-middle max-w-2xl w-full ease-in-out border-b-2 py-3 pl-9 rounded-none"
                placeholder="Email address"
              />
            </div>
            {touched.email && <div className="text-red-500">{emailError}</div>}
            <div className="flex relative pt-5 pb-7 mb-2">
              <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600 my-3"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={data.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="inline-block align-middle max-w-2xl w-full ease-in-out border-b-2 py-3 pl-9 rounded-none"
                placeholder="Password"
              />
            </div>
            {touched.password && <div className="text-red-500">{passwordError}</div>}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 shadow-xl hover:shadow-none mt-8"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <HiLockClosed
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Log in
            </button>
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
        © 2020 All Rights Reserved. <span className="text-blue-600">CORK</span> is a product of Designreset. <span className="text-blue-600">Cookie Preferences</span>, <span className="text-blue-600">Privacy</span>, and <span className="text-blue-600">Terms</span>.
      </p>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default React.memo(Login);
