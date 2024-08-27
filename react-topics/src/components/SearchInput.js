import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
const dummyData = [
  { id: "1", name: "chiku" },
  { id: "2", name: "apple" },
  { id: "3", name: "banana" },
  { id: "4", name: "pear" },
];
const SearchInput = ({ onChange }) => {
  const [result, setResult] = useState([]);
  const [SearchInput, setSearchInput] = useState("");
  const debounceValue = useDebounce(SearchInput, 2000);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(debounceValue);
    }

    const filteredData = dummyData.filter((item) =>
      item.name.toLowerCase().includes(SearchInput.toLowerCase())
    );
    setResult(filteredData);
  }, [onChange, debounceValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="type something here"
        value={SearchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {result.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
