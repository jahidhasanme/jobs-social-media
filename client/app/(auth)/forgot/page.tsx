"use client";

import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Forgot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // Submit Handler
  const onSubmit = async (data: FieldValues) => {
    // TODO: Send data to backend also make this server client
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success(`Request has been sent, check you mail.`, {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
    });
    console.log(data);
    reset();
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen my-10 max-sm:mx-5 forgot-pass">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-[0_30px_60px_rgba(3,4,28,.1)] p-[40px_60px_45px] sm:p-[50px_85px_55px] space-y-4 bg-white rounded md:space-y-6"
        >
          <div className="texts">
            <h3 className="mb-2 text-xl font-semibold text-center xsm:text-2xl sm:text-4xl">
              Forgot Password?
            </h3>
            <p className="max-sm:text-xs">
              Enter your email address to request password reset.
            </p>
          </div>
          <div className="email-input">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
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
          <button
            disabled={isSubmitting}
            type="submit"
            className="disabled:opacity-50 w-full bg-[#1976D2] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)] text-white font-medium rounded-md text-xs xsm:text-sm py-3 xsm:py-4 hover:bg-[#1660A5] ease-linear duration-200"
          >
            {isSubmitting ? "Sending Request..." : "Send Request"}
          </button>
          <div>
            <p className="text-xs xsm:text-sm text-center text-[#A2A2A2]">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-[#1976D2] hover:text-[#1660A5] ease-linear duration-200 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Forgot;
