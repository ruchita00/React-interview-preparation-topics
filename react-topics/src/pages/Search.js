import React, { useState } from "react";
import SearchInput from "../components/SearchInput";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };
  return (
    <div>
      <h1>Searching for:{search}</h1>
      <SearchInput onChange={handleSearch} />
    </div>
  );
};

export default Search;
