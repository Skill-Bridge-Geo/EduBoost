import React from "react";
import "./App.css";
// import { Outlet } from "react-router-dom";
// const Header = React.lazy(() => import("./components/Header/Header"));
// const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Paid = React.lazy(
  () => import("./components/Paid/Video/Video")
);

function App() {
  return (
    <>
      {/* <Header />
      <Outlet />
      <Footer /> */}
      <Paid />
    </>
  );
}

export default App;
