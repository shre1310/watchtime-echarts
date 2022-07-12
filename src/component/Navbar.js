import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/about">AvgWatchTime</Link>
      <Link to="/shop">VercelApp</Link>
    </div>
  );
};

export default Navbar;