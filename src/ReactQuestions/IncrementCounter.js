import { useState, useEffect } from "react";
export default function IncrementCounter() {
  let [start, setStart] = useState(false);
  let [count, setCount] = useState(0);
  useEffect(() => {
    let timer = null;
    if (start) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      console.log(timer, "start");
    }
    return () => {
      console.log(timer, "inside return");
      window.clearTimeout(timer);
    };
  }, [start, count]);
  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setStart(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setStart(false);
        }}
      >
        Pause
      </button>
    </div>
  );
}
