import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
const Home = React.lazy(() => import("./components/Home/Home"));
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Login' element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App
