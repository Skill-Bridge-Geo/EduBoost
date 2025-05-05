import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Footer from "./Footer/Footer";

const Home = React.lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <>
      <Footer />
    </>
  );
}
<Router>
  <Routes>
    <Route path='/' element={<Home />} />
    {/* <Route path='/Login' element={<Login />} /> */}
  </Routes>
</Router>;

export default App;
