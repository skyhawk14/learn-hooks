import { useEffect, useRef } from "react";

export const usePrevious = (v) => {
  console.log("Use Previous gets called", v);
  const value = useRef();
  useEffect(() => {
    console.log("use useEffect");
    value.current = v;
  }, [v]);
  return value.current;
};
