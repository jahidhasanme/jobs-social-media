import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
      <ToastContainer className="text-sm" />
    </>
  );
}

export default App;
