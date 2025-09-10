import React, { useEffect, useState } from "react";
import Today from "../../today/Today";

const Status = ({ todos, setTodos }) => {
  const [status, setStatus] = useState("all");
  const [fitersTodos, setFiltersTodos] = useState(todos);
  //   const handleOption = (e) => {
  //     if (e.target.value === "all") {
  //       setStatus("all");
  //       setFiltersTodos(todos);
  //     }
  //     if (e.target.value === "completed") {
  //       setStatus("completed");
  //       setFiltersTodos(todos.filter((todo) => todo.checked === true));
  //     }
  //     if (e.target.value === "uncompleted") {
  //       setStatus("uncompleted");
  //       setFiltersTodos(todos.filter((todo) => todo.checked !== true));
  //     }
  //   };
  useEffect(() => {
    if (status === "all") {
      setFiltersTodos(todos);
    }
    if (status === "completed") {
      setFiltersTodos(todos.filter((todo) => todo.checked === true));
    }
    if (status === "uncompleted") {
      setFiltersTodos(todos.filter((todo) => todo.checked !== true));
    }
  }, [todos]);
  return (
    <>
      <div>
        <div className="w-64 mx-auto mt-10">
          <select
            onChange={(e) => setStatus(e.target.value)}
            className="w-96 bg-[#E1D8D9] p-2 border-4 border-amber-400 rounded-sm "
          >
            <option>choose a component</option>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">UnCompleted</option>
          </select>
        </div>
        {status === "all" && <Today todos={fitersTodos} setTodos={setTodos} />}
        {status === "completed" && (
          <Today todos={fitersTodos} setTodos={setTodos} />
        )}
        {status === "uncompleted" && (
          <Today todos={fitersTodos} setTodos={setTodos} />
        )}
      </div>
    </>
  );
};

export default Status;
