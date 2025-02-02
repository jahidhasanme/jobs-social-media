import { useState } from "react";
import { AuthHeader } from "./AuthHeader";
import { Bounce, toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Forgot = () => {
  const [credentials, setCredentials] = useState({
    email: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // Validation Config Obj
  type ValidationRule = { required?: boolean; message: string; pattern?: RegExp; minLength?: number };
  type ValidationConfig = { [key: string]: ValidationRule[] };

  const validationConfig: ValidationConfig = {
    email: [
      { required: true, message: "Email is required" },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Enter a valid mail",
      },
    ],
    password: [
      { required: true, message: "Password is required" },
      { minLength: 6, message: "Password must be at least 6 characters" },
    ],
  };

  // Validation Function
  const validate = (formData: { [key: string]: string }) => {
    const errorsData: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      (validationConfig[key] as ValidationRule[]).some((rule: ValidationRule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minLength && (value as string).length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  //   Handle Change Eventlistener
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  // Handle Submit Eventlistener
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorsData = validate(credentials);
    if (!Object.values(errorsData).length) {
      toast.success(`Request has been sent, check you mail.`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <AuthHeader />
      <section className="flex items-center justify-center min-h-screen my-10 max-sm:mx-5 forgot-pass">
        <form
          onSubmit={handleSubmit}
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
              value={credentials.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="rounded outline-none w-full p-3 bg-white shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)]"
              placeholder="Email"
            />
            <p className="mt-1 ml-1 text-sm text-red-500 error">
              {errors.email}
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1976D2] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)] text-white font-medium rounded-md text-xs xsm:text-sm py-3 xsm:py-4 hover:bg-[#1660A5] ease-linear duration-200"
          >
            Send Request
          </button>
          <div>
            <p className="text-xs xsm:text-sm text-center text-[#A2A2A2]">
              Remember your password?{" "}
              <Link
                to="/"
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
