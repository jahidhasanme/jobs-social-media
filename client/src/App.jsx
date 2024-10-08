import { LandingPage } from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <LandingPage />
      <ToastContainer className="text-sm" />
    </>
  );
}

export default App;
