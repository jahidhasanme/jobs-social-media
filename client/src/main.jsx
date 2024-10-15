import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

import App from "./App.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { Forgot } from "./components/auth/Forgot.jsx";

// Sign up page routes component
import { Signup } from "./components/auth/Signup.jsx";
import { EmailVerification } from "./components/form/EmailVerification.jsx";
import { SetName } from "./components/form/SetName.jsx";
import { SetNumber } from "./components/form/SetNumber.jsx";
import { SetJobDescription } from "./components/form/SetJobDescription.jsx";
import { SetCategory } from "./components/form/SetCategory.jsx";
import { SetSkills } from "./components/form/SetSkills.jsx";
import { SetInterestedCountries } from "./components/form/SetInterestedCountries.jsx";

// Home page routes component
import Home from "./pages/Home.jsx";
import { Jobs } from "./pages/Jobs.jsx";
import { Message } from "./pages/Message.jsx";
import { Notifications } from "./pages/Notifications.jsx";
import { Packages } from "./pages/Packages.jsx";

import "./index.css";
import { Admin } from "./pages/admin/Admin.jsx";

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
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "jobs",
            element: <Jobs />,
          },
          {
            path: "message",
            element: <Message />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "packages",
            element: <Packages />,
          },
        ],
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
          {
            path: "set-job-description", // Route for /signup/set-job-description
            element: <SetJobDescription />,
          },
          {
            path: "set-category", // Route for /signup/set-category
            element: <SetCategory />,
          },
          {
            path: "set-skills", // Route for /signup/set-skills
            element: <SetSkills />,
          },
          {
            path: "set-interested-countries", // Route for /signup/set-interested-countries
            element: <SetInterestedCountries />,
          },
        ],
      },
      {
        path: "/admin",
        element: <Admin />,
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
