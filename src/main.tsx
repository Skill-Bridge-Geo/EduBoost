import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./components/LoginRegistration/AouthContext/AouthContext.tsx";
// import Profile from "./components/Profile/Profile.tsx";

const Home = React.lazy(() => import("./components/Home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [{ index: true, element: <Home /> }],
     children: [
      { index: true, element: <Home /> },
      // { path: "/Profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
