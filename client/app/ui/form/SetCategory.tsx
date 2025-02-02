import { useNavigate } from "react-router-dom";

export const SetCategory = () => {
  // Navigation
  const navigate = useNavigate();

  // Handle Submit Eventlistener
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const errorsData = validate(credentials);
    // if (!Object.values(errorsData).length) {
    //Checks if every field is filled if it is then redirect to number verification page
    // }
    navigate("/signup/set-skills");
  };

  return (
    <section className="px-5 flex flex-col bg-[#F5F5F5] items-center justify-center py-10 min-h-screen gap-5 signup-set-name">
      <h3 className="text-[#1976D2] mb-5 text-2xl sm:text-3xl font-semibold">
        Sign Up
      </h3>
      <div className="w-full max-w-md p-8 bg-white rounded-lg">
        <form className="mx-auto" onSubmit={handleSubmit}>
          <h3 className="mb-6 text-sm font-medium sm:text-xl text-[#535353]">
            Category
          </h3>
          <div className="mb-6">
            <div className="categories">
              <ul className="max-xsm:justify-normal max-sm:justify-center flex flex-wrap max-sm:text-sm font-medium text-[#A2A2A2] gap-4">
                <li className="py-2 px-5 sm:py-3 sm:px-7 rounded bg-[#F5F5F5] hover:bg-[#1976D2] hover:text-white ease-linear duration-200 cursor-pointer">
                  Sales
                </li>
                <li className="py-2 px-5 sm:py-3 sm:px-7 rounded bg-[#F5F5F5] hover:bg-[#1976D2] hover:text-white ease-linear duration-200 cursor-pointer">
                  Marketing
                </li>
                <li className="py-2 px-5 sm:py-3 sm:px-7 rounded bg-[#F5F5F5] hover:bg-[#1976D2] hover:text-white ease-linear duration-200 cursor-pointer">
                  IT/ICT
                </li>
                <li className="py-2 px-5 sm:py-3 sm:px-7 rounded bg-[#F5F5F5] hover:bg-[#1976D2] hover:text-white ease-linear duration-200 cursor-pointer">
                  Retail Associate
                </li>
                <li className="py-2 px-5 sm:py-3 sm:px-7 rounded bg-[#F5F5F5] hover:bg-[#1976D2] hover:text-white ease-linear duration-200 cursor-pointer">
                  Engineering
                </li>
                <li className="py-2 px-5 sm:py-3 sm:px-7 rounded bg-[#F5F5F5] hover:bg-[#1976D2] hover:text-white ease-linear duration-200 cursor-pointer">
                  Sales
                </li>
                <li className="py-2 px-5 sm:py-3 sm:px-7 rounded bg-[#F5F5F5] hover:bg-[#1976D2] hover:text-white ease-linear duration-200 cursor-pointer">
                  Marketing
                </li>
                <li className="py-2 px-5 sm:py-3 sm:px-7 rounded bg-[#F5F5F5] hover:bg-[#1976D2] hover:text-white ease-linear duration-200 cursor-pointer">
                  IT/ICT
                </li>
              </ul>
            </div>
            {/* <p className="mt-1 ml-1 text-sm text-red-500">{errors.firstName}</p> */}
          </div>
          <div className="flex justify-end gap-4 controls-button">
            <button
              onClick={() => navigate("/signup/set-job-description")}
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
// 2: Add onclick bg change it like it clicked
