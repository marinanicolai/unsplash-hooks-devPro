import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Index</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
