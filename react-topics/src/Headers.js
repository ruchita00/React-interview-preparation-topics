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
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/accordion"
      >
        Accordion
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/tab"
      >
        Tab
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/starRating"
      >
        StarRating
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/todo"
      >
        Todo
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/FormFiled"
      >
        FormFiled
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/pagination"
      >
        Pagination
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/inifiniteScroll"
      >
        InifiniteScroll
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/hoc"
      >
        hoc
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/SearchFilter"
      >
        SearchFilter
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/Memoization"
      >
        Memoization
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/EmojiSearch"
      >
        EmojiSearch
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "black", fontWeight: 600 }}
        to="/Practice"
      >
        Practice
      </NavLink>
    </div>
  );
};

export default Headers;
