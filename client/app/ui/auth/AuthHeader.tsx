import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Link from "next/link";
import { RootState } from "@/app/store";

// Icons
import { RxCrossCircled } from "react-icons/rx";
import { isJoinNowOpen } from "../../store/slices/joinNowSlice";

export const AuthHeader = () => {
  // Redux States
  const isJoinOpen = useSelector((state: RootState) => state.joinNow);
  const dispatch = useDispatch();

  return (
    <>
      <header className="bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] header">
        <div className="flex items-center justify-between px-4 mx-auto xsm:px-10 max-w-screen-2xl py-7 content">
          <div className="logo">
            <Link href="/">
              <h1 className="text-2xl font-bold sm:text-4xl">
                Job<span className="text-[#535353]">Search</span>
              </h1>
            </Link>
          </div>
          <div className="join_button">
            <button
              onClick={() => dispatch(isJoinNowOpen("openJoinNow"))}
              className="bg-[#1976D2] hover:bg-[#1660A5] ease-linear duration-200 text-white py-2 xsm:py-3 px-5 xsm:px-7 rounded"
            >
              Join Now
            </button>
          </div>
        </div>
      </header>

      {/* Join Now Modal */}
      {createPortal(
        <section
          className={`${
            isJoinOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-10 opacity-0 invisible"
          } z-50 ease-linear duration-200 p-16 absolute top-1/3 left-1/2 -translate-x-1/2 join-now bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]`}
        >
          <div className="text-center texts mb-7">
            <h2 className="text-[#1976D2] text-4xl font-medium mb-1">
              Be a new member!
            </h2>
            <p className="text-[#A2A2A2] text-lg">
              Please choose an option first:
            </p>
          </div>
          <div className="flex flex-col gap-5 buttons">
            <button className="hover:text-white hover:bg-[#1976D2] ease-linear duration-200 py-3 rounded text-lg shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
              I am an Employer
            </button>
            <button className="hover:text-white hover:bg-[#1976D2] ease-linear duration-200 py-3 rounded text-lg shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]">
              I am an Employee
            </button>
          </div>
          <button onClick={() => dispatch(isJoinNowOpen("closeJoinNow"))}>
            <RxCrossCircled className="absolute text-3xl text-[#535353] cursor-pointer top-5 right-5" />
          </button>
        </section>,
        document.getElementById("modal") as HTMLElement
      )}
    </>
  );
};
