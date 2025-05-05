import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Footer from "./Footer/Footer";
const Home = React.lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Footer />} />
        {/* <Route path='/Login' element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
