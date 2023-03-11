import { useState } from "react";
import { usePrevious } from "./CustomHooks/usePrevious";
import EmployeOnlineStatus from "./ReactQuestions/EmployeOnlineStatus";
function App() {
  return (
    <EmployeOnlineStatus
      employees={[
        { first_name: "Naruto", last_name: "Uzamaki" },
        { first_name: "Sasuke", last_name: "Uchiha" },
      ]}
    />
  );
}

export default App;
