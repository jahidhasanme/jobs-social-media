import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

import App from "./App.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { Forgot } from "./components/auth/Forgot.jsx";

// Sign up page components
import { Signup } from "./components/auth/Signup.jsx";
import { EmailVerification } from "./components/Form/EmailVerification.jsx";
import { SetName } from "./components/Form/SetName.jsx";
import { SetNumber } from "./components/Form/SetNumber.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      {
        path: "/signup",
        element: <Signup />, // Parent component that contains the <Outlet /> for signup pages
        children: [
          {
            path: "email-verification", // Route for /signup/email-verification
            element: <EmailVerification />,
          },
          {
            path: "set-name", // Route for /signup/set-name
            element: <SetName />,
          },
          {
            path: "set-number", // Route for /signup/set-number
            element: <SetNumber />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
