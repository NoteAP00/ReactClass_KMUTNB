import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
export default function Router1() {
  const navStyle = {
    backgroundColor: "#ced",
    padding: "7px",
    textAlign: "center",
  };
  const linkStyle = {
    display: "inline-block",
    color: "blue",
    textDecoration: "none",
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link style={linkStyle} to="/">
          Home
        </Link>
        -&nbsp;
        <Link style={linkStyle} to="/product">
          Product
        </Link>
        -&nbsp;
        <Link style={linkStyle} to="/member">
          Member
        </Link>
        -&nbsp;
        <Link style={linkStyle} to="/contact">
          Contact Us
        </Link>
      </nav>
    </BrowserRouter>
  );
}
