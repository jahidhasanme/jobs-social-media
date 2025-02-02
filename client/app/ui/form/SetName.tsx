import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SetName = () => {
  // Navigation states from router dom
  const navigate = useNavigate();

  // Credentials and error state
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string }>({});

  // Validation Config Obj
  const validationConfig: { [key: string]: { required: boolean; message: string }[] } = {
    firstName: [{ required: true, message: "First name is required" }],
    lastName: [{ required: true, message: "Last name is required" }],
  };

  // Validation Function
  const validate = (formData: { [key: string]: string }) => {
    const errorsData: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
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
      //Checks if every field is filled if it is then redirect to number verification page
      navigate("/signup/set-number");
    }
  };

  return (
    <section className="px-5 flex flex-col bg-[#F5F5F5] items-center justify-center py-10 min-h-screen gap-5 signup-set-name">
      <h3 className="text-[#1976D2] mb-5 text-2xl sm:text-3xl font-semibold">
        Sign Up
      </h3>
      <div className="w-full max-w-md p-8 bg-white rounded-lg">
        <form className="mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="firstName"
              className="max-sm:text-sm block mb-2 text-[#535353] font-medium"
            >
              First Name
            </label>
            <input
              value={credentials.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-sm outline-none rounded-lg block w-full p-2.5"
            />
            <p className="mt-1 ml-1 text-sm text-red-500">{errors.firstName}</p>
          </div>
          <div className="mb-5">
            <label
              htmlFor="lastName"
              className="max-sm:text-sm block mb-2 text-[#535353] font-medium"
            >
              Last Name
            </label>
            <input
              value={credentials.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              id="lastName"
              className="bg-gray-50 border outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5"
            />
            <p className="mt-1 ml-1 text-sm text-red-500">{errors.lastName}</p>
          </div>
          <div className="flex justify-end gap-4 controls-button">
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="prev-btn ease-linear duration-200 bg-[#CDCDCD] hover:bg-[#A9A9A9] py-3 sm:py-4 px-4 sm:px-6 rounded"
            >
              <svg
                className="w-6 sm:w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 16"
                fill="none"
              >
                <path
                  d="M1.277 8.707a1 1 0 010-1.414L7.641.929a1 1 0 011.414 1.414L3.4 8l5.656 5.657a1 1 0 11-1.414 1.414L1.277 8.707zM34 9H1.984V7H34v2z"
                  fill="#535353"
                />
              </svg>
            </button>
            <button
              type="submit"
              className="next-btn bg-[#1976D2] hover:bg-[#1660A5] ease-linear duration-200 py-3 sm:py-4 px-4 sm:px-6 rounded"
            >
              <svg
                className="w-6 sm:w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 16"
                fill="none"
              >
                <path
                  d="M32.723 8.707a1 1 0 000-1.414L26.359.929a1 1 0 10-1.414 1.414L30.6 8l-5.656 5.657a1 1 0 101.414 1.414l6.364-6.364zM0 9h32.016V7H0v2z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
