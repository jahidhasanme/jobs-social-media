import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export const EmailVerification = () => {
  // Creating dummy form data to map and create otp field
  const [otp, setOtp] = useState(new Array(6).fill(""));

  //   Function to handle change event of otp fields
  function handleChange(e, i) {
    // if value is something else than number return false
    if (isNaN(e.target.value)) return false;

    // if its a number then set the number to otp
    setOtp([
      ...otp.map((data, index) => (index === i ? e.target.value : data)),
    ]);

    // when typing otp it will automatically focus on next input field
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }

  // handle paste on otp field
  function handlePaste(e) {
    // getting data from clipboard
    const value = e.clipboardData.getData("text");

    // if value is something else than number return false
    if (isNaN(value)) return false;

    // Making an array based on copied text
    const updatedValue = value.toString().split("");

    // ensure that copied otp is less than 7 digits
    if (updatedValue.length > 6) {
      toast.error(`maximum length of otp should be 6.`, {
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
    } else {
      setOtp(updatedValue);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen email-verification">
      <div className="max-w-2xl text-center texts">
        <h3 className="text-[#1976D2] mb-8 text-3xl font-semibold">
          Email Verification
        </h3>
        <p className="font-medium text-lg text-[#535353] mb-4">
          Dear User/Employee,
        </p>
        <p className="text-[#535353] text-lg">
          We have sent you a 6-digit OTP at{" "}
          <span className="email text-[#1976D2]">dfrddcsdc@gmail.com</span> to
          verify your account. Please enter the OTP below and click{" "}
          <span className="font-semibold">“verify”</span>
        </p>
      </div>
      <div className="flex justify-center w-4/6 gap-3 mx-auto my-10 otp-area">
        {otp.map((data, i) => {
          return (
            <input
              value={data}
              onChange={(e) => handleChange(e, i)}
              onPaste={(e) => handlePaste(e)}
              maxLength={1}
              type="text"
              key={i}
              className="w-12 focus:border-[#1976D2] h-16 rounded p-3 text-center border-[1.5px] border-[#A2A2A2] outline-none"
            />
          );
        })}
      </div>
      <button className="verify_button bg-[#1976D2] text-white py-3 hover:bg-[#1660A5] ease-linear duration-200 px-10 rounded">
        Verify
      </button>
    </section>
  );
};

// Todo :
// 1: show toast on verify button
// 2: auto redirect to signup name page on otp entering
// 3: auto redirect to signup name page on clicking on verify also checks if otp is entered
// 4: show error toast if click submit and otp not full filled
