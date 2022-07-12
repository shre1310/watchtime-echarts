import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
  import AvgWatchTime from "../components/AvgWatchTime";
  import VercelApp from "../components/AverageWatchTime";
  import Home from "../components/Home";
const index = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AvgWatchTime" element={<AvgWatchTime />} />
          <Route path="/VercelApp" element={<VercelApp />} />
    </Routes>
  )
}

export default index