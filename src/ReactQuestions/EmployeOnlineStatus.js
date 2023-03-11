import { useState } from "react";
import "./EmployeStatusOnline.css";
const EmployeOnlineStatus = ({ employees }) => {
  let id = 0;
  employees = employees.map((e) => ({
    ...e,
    status: false,
    id: id++,
  }));
  const [employeesData, setEmployeesData] = useState(employees);
  const clickHandler = function (key) {
    let d = employeesData;
    d[key].status = !d[key].status;
    setEmployeesData([...d]);
  };
  console.log("rendered again", employeesData);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((em) => (
            <tr key={`${em.id}${em.status}`}>
              <td>{em.first_name}</td>
              <td>{em.last_name}</td>
              <td>{em.status ? "Online" : "Offline"}</td>
              <td>
                <button onClick={() => clickHandler(em.id)}>
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  //   return <>Hello</>;
};
export default EmployeOnlineStatus;
