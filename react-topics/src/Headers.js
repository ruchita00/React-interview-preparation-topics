import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        fontSize: "20px",
      }}
    >
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/search"
      >
        Search
      </NavLink>
    </div>
  );
};

export default Headers;
