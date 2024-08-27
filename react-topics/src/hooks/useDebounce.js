import React, { useEffect, useState } from "react";

const useDebounce = (value, interval) => {
  const [debounceValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, interval);
    return () => clearTimeout(handler);
  }, [value, interval]);
  return debounceValue;
};

export default useDebounce;
