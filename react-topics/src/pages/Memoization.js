import React, { useCallback, useMemo, useState } from "react";

const Memoization = () => {
  const [filters, setFilters] = useState("");
  const [items, setItems] = useState(["banana", "apple", "orange", "chiku"]);

  const handleFilter = useCallback((e) => {
    setFilters(e.target.value);
  }, []);

  const filteredItems = useMemo(() => {
    const filtredItem = items.filter((item) =>
      item.toLowerCase().includes(filters.toLowerCase())
    );
    return filtredItem.sort();
  }, [items, filters]);
  return (
    <div>
      <input
        type="text"
        value={filters}
        onChange={handleFilter}
        placeholder="filter change"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Memoization;
