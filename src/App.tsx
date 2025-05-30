import React from "react";

import "./App.css";
// import { Outlet } from "react-router-dom";
const Header = React.lazy(() => import("./components/Header/Header"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
// const PaidVideo=React.lazy(()=>import("./components/Paid/Video/Video"))
import Search1 from "./components/search1/Search1";

function App() {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Search1 />
      <Footer />
      {/* <PaidVideo /> */}
    </>
  );
}

export default App;
