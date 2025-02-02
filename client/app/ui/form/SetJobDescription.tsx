import { useNavigate } from "react-router-dom";

export const SetJobDescription = () => {
  const navigate = useNavigate();

  // Handle Submit Eventlistener
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const errorsData = validate(credentials);
    // if (!Object.values(errorsData).length) {
    //Checks if every field is filled if it is then redirect to number verification page
    // }
    navigate("/signup/set-category");
  };

  return (
    <section className="px-5 flex flex-col bg-[#F5F5F5] items-center justify-center py-10 min-h-screen gap-5 signup-set-name">
      <h3 className="text-[#1976D2] mb-5 text-2xl sm:text-3xl font-semibold">
        Sign Up
      </h3>
      <div className="w-full max-w-md p-8 bg-white rounded-lg">
        <form className="mx-auto" onSubmit={handleSubmit}>
          <p className="skip max-sm:text-sm underline text-[#535353] mb-4 text-right">
            Skip
          </p>
          <h3 className="mb-6 text-sm font-medium sm:text-lg">
            Describe your current job:
          </h3>
          <div className="mb-5">
            <label
              htmlFor="position"
              className="max-sm:text-sm block mb-2 text-[#535353] font-medium"
            >
              Position
            </label>
            <input
              // value={credentials.firstName}
              // onChange={handleChange}
              type="text"
              name="position"
              id="position"
              className="bg-gray-50 border border-gray-300 text-sm outline-none rounded-lg block w-full p-2.5"
            />
            {/* <p className="mt-1 ml-1 text-sm text-red-500">{errors.firstName}</p> */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="companyName"
              className="max-sm:text-sm block mb-2 text-[#535353] font-medium"
            >
              Company Name
            </label>
            <input
              // value={credentials.lastName}
              // onChange={handleChange}
              type="text"
              name="companyName"
              id="companyName"
              className="bg-gray-50 border outline-none border-gray-300 text-sm rounded-lg block w-full p-2.5"
            />
            {/* <p className="mt-1 ml-1 text-sm text-red-500">{errors.lastName}</p> */}
          </div>
          <div className="mb-5">
            <div className="flex items-center mb-4">
              <input
                id="still-working"
                type="checkbox"
                value=""
                className="w-4 h-4 border-gray-300 rounded"
              />
              <label
                htmlFor="still-working"
                className="text-sm text-[#535353] font-medium ms-2"
              >
                I am still working
              </label>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex mb-4 sm:items-center max-sm:gap-4 sm:justify-between max-sm:flex-col">
              <div className="start-date">
                <label
                  htmlFor="startDate"
                  className="max-sm:text-sm block mb-2 text-[#535353] font-medium"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="px-4 py-3 rounded text-[#535353] text-sm bg-white shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)]"
                />
              </div>
              <div className="end-date">
                <label
                  htmlFor="endDate"
                  className="max-sm:text-sm block mb-2 text-[#535353] font-medium"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  className="px-4 py-3 rounded text-[#535353] text-sm bg-white shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <button className="flex items-center gap-2 add-another-job">
              <div className="p-1 bg-[#1976D2] text-white rounded-full">
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M6.5 0v6.5m0 6.5V6.5m0 0H0h13"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <span className="max-sm:text-sm">Add another job</span>
            </button>
          </div>
          <div className="flex justify-end gap-4 controls-button">
            <button
              onClick={() => navigate("/signup/set-number")}
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

// Todos:
// 1: Add validation
// 2: Add skip button functionality
