// import { usePrevious } from "./CustomHooks/usePrevious";
import { useEffect, useState } from "react";

const Timer = function () {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const startTimer = function () {
    setTimeout(function () {
      console.log(seconds);
      setSeconds((v) => v + 1);
    }, 1000);
  };
  useEffect(() => {
    setTimeout(function () {
      console.log(seconds);
      setSeconds((v) => v + 1);
    }, 1000);
  }, [seconds]);
  return (
    <>
      {hours} Hours
      <br />
      {minutes} Minutes
      <br />
      {seconds} Seconds
      <br />
      <button onClick={startTimer}>Start timer</button>
    </>
  );
};
// import EmployeOnlineStatus from "./ReactQuestions/EmployeOnlineStatus";
function App() {
  return <Timer />;
}

export default App;
