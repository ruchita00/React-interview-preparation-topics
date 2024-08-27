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
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/search"
      >
        Search
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/stopwatch"
      >
        Stopwatch
      </NavLink>
    </div>
  );
};

export default Headers;
