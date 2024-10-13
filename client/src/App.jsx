import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { isJoinNowOpen } from "./store/slices/joinNowSlice";

// Css Imports
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Redux States
  const isJoinOpen = useSelector((state) => state.joinNow);
  const dispatch = useDispatch();
  return (
    <>
      <Outlet />
      <ToastContainer className="text-sm" />
      {/* Body Overlay on join now click */}
      <div
        onClick={() => dispatch(isJoinNowOpen("closeJoinNow"))}
        className={`${
          isJoinOpen ? "" : "hidden"
        } body-overlay visible opacity-70 bg-[#03041c] h-full w-full fixed top-0 z-40 left-0 ease-out duration-300`}
      ></div>
    </>
  );
}

export default App;
