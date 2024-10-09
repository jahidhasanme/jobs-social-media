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
        element: <Signup />, // Parent component that contains the <Outlet />
        children: [
          {
            path: "email-verification", // Route for /signup/email-verification
            element: <EmailVerification />,
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
