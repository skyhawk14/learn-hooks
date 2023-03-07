import { useState } from "react";
import { usePrevious } from "./CustomHooks/usePrevious";

function App() {
  const [val, setVal] = useState(0);
  const prevValue = usePrevious(val);
  console.log("App render");
  return (
    <div>
      <span>Value: {val}</span>
      <br />
      <span>prevValue: {prevValue}</span>
      <button
        onClick={() => {
          console.log("setVal called");
          setVal(val + 1);
        }}
      >
        {" "}
        increase count
      </button>
    </div>
  );
}

export default App;
