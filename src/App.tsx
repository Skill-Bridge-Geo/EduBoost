import React from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
const Header = React.lazy(() => import("./components/Header/Header"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
