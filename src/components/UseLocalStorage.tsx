import { useEffect, useState } from "react";

const UseLocalStorage = (key: string, defaultValue: number) => {
  const [value, setValue] = useState(() => {
    const JsonValue = window.localStorage.getItem(key);
    if (JsonValue !== null) return JSON.parse(JsonValue);

    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, setValue]);

  return [value, setValue];
};

export default UseLocalStorage;
