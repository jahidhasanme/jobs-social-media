"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "@/app/ui/auth/Footer";

// Icons from react icons
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { FieldValues, useForm } from "react-hook-form";
import StoreProvider from "@/app/store/slices/StoreProvider";
import { AuthHeader } from "@/app/ui/auth/AuthHeader";

const Signup = () => {
  // States
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);
  const [isEmployeeSelect, setIsEmployeeSelect] = useState(false);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    getValues,
  } = useForm();

  // Submit Handler
  const onSubmit = async (data: FieldValues) => {
    // TODO: Send data to backend also make this server client
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success(
      `Hey there, ${getValues("email").split("@")[0]}. Welcome to the family!`,
      {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      }
    );
    console.log(data);
    reset();
  };

  return (
    <>
      <StoreProvider>
        <AuthHeader />
      </StoreProvider>
      <section className="signup bg-[#F5F5F5]">
        <div className="flex items-center justify-center max-w-screen-xl px-4 mx-auto sm:px-10 max-lg:gap-8 max-md:items-center max-md:flex-col py-28">
          <div className="w-full max-w-lg p-10 bg-white rounded-md md:max-w-sm lg:max-w-md right-sec">
            <div className="flex justify-center gap-16 mb-8">
              <button
                onClick={() => setIsEmployeeSelect(false)}
                className={`${isEmployeeSelect
                    ? ""
                    : "!text-[#1976D2] border-b-2 border-[#1976D2]"
                  } font-semibold text-sm text-[#A2A2A2] xsm:text-lg  pb-1`}
              >
                User/Employee
              </button>
              <button
                onClick={() => setIsEmployeeSelect(true)}
                className={`${isEmployeeSelect
                    ? "border-b-2 border-[#1976D2] !text-[#1976D2]"
                    : ""
                  } font-semibold text-sm xsm:text-lg text-[#A2A2A2] pb-1`}
              >
                Employer
              </button>
            </div>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="email-input">
                <input
                  {...register("email", {
                    required: "Please enter an email",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  className="rounded outline-none w-full p-3 bg-white shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)]"
                  placeholder="Email"
                />
                <p className="mt-1 ml-1 text-sm text-red-500 error">
                  {errors.email?.message as string}
                </p>
              </div>
              <div className="password-input">
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type={`${isPasswordShow ? "text" : "password"}`}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="rounded outline-none w-full p-3 bg-white shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)]"
                  />
                  <IoEyeOffSharp
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                    className={`
                    ${isPasswordShow ? "hidden" : ""
                      } absolute text-xl -translate-y-1/2 text-[#CDCDCD] cursor-pointer right-6 login-input-eye top-1/2`}
                  />
                  <IoEyeSharp
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                    className={`${isPasswordShow ? "" : "hidden"
                      } absolute text-xl text-[#CDCDCD] -translate-y-1/2 cursor-pointer right-6 login-input-eye top-1/2`}
                  />
                </div>
                <p className="mt-1 ml-1 text-sm text-red-500 error">
                  {errors.password?.message as string}
                </p>
              </div>
              <div className="confirm-password-input">
                <div className="relative">
                  <input
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords do not match!",
                    })}
                    type={`${isConfirmPasswordShow ? "text" : "password"}`}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Re-enter Password"
                    className="rounded outline-none w-full p-3 bg-white shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)]"
                  />
                  <IoEyeOffSharp
                    onClick={() =>
                      setIsConfirmPasswordShow(!isConfirmPasswordShow)
                    }
                    className={`
                    ${isConfirmPasswordShow ? "hidden" : ""
                      } absolute text-xl -translate-y-1/2 text-[#CDCDCD] cursor-pointer right-6 login-input-eye top-1/2`}
                  />
                  <IoEyeSharp
                    onClick={() =>
                      setIsConfirmPasswordShow(!isConfirmPasswordShow)
                    }
                    className={`${isConfirmPasswordShow ? "" : "hidden"
                      } absolute text-xl text-[#CDCDCD] -translate-y-1/2 cursor-pointer right-6 login-input-eye top-1/2`}
                  />
                </div>
                <p className="mt-1 ml-1 text-sm text-red-500 error">
                  {errors.confirmPassword?.message as string}
                </p>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="disabled:opacity-50 w-full bg-[#1976D2] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)] text-white font-medium rounded-md text-sm py-4 hover:bg-[#1660A5] ease-linear duration-200"
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </form>
            <p className="mt-5 text-xs text-center sm:text-sm">
              By clicking{" "}
              <span className="text-[#1976D2] font-semibold">Sign up</span> or
              Continue, you agree to our{" "}
              <span className="text-[#00B2FF]">User Agreement</span>,&nbsp;
              <span className="text-[#00B2FF]">Privacy Policy</span>
              ,&nbsp;and&nbsp;
              <span className="text-[#00B2FF]">Cookie Policy</span>
            </p>
            <div className="flex flex-col items-center continue-with-google">
              <p className="text-[#A2A2A2] font-medium text-center my-5 text-sm">
                Or continue with
              </p>
              <div className="cursor-pointer p-2 rounded-xl bg-white google-icon shadow-[0px_2px_15px_0px_rgba(0,0,0,0.25)] w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-8 h-8 md:w-11 md:h-11"
                >
                  <path
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    fill="#FFC107"
                  />
                  <path
                    d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
            </div>
            <div className="my-8 font-semibold text-center">
              <p className="text-base sm:text-lg">
                Already a member?{" "}
                <Link
                  href="/login"
                  className="text-[#1976D2] font-bold hover:text-[#1660A5] ease-linear duration-200"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
