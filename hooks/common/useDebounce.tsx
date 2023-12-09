import React, { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState<T>(value);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeOut);
  }, [delay, value]);
  return debounceValue;
}

export default useDebounce;

