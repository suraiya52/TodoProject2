import moment from "moment";
import React, { useContext } from "react";
import { FaEdit, FaRegCheckCircle, FaTrash } from "react-icons/fa";
import { TodoContext } from "../../App";

const Next7Days = () => {
  const { todos, setTodos } = useContext(TodoContext);
  console.log("todos come", todos);
  const today = moment();

  //   Generate next 7 days including today
  const days = Array?.from({ length: 7 }, (_, i) =>
    moment(today)?.add(i, "days")
  );
  //   console.log(days)

  // Toggle complete
  const handleCheck = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo?.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // Delete todo
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo?.id !== id));
  };
  return (
    <div className="max-w-2xl bg-[#E1D8D9] mx-auto mt-6 p-4">
      {days.map((day) => {
        const formattedDate = day.format("MM/DD/YYYY");
        // console.log("Checking for:", formattedDate);
        const dayTodos = todos?.filter((todo) => todo.dates === formattedDate);

        return (
          <div key={formattedDate} className="mb-6">
            {/* Day Header */}
            <h4 className="text-md font-semibold border-b border-gray-400 pb-1 mb-2">
              {day?.isSame(today, "day")
                ? `${day.format("dddd")} (Today)`
                : day.format("dddd")}{" "}
              <span className="text-gray-500">({dayTodos?.length})</span>
            </h4>

            {/* Todos */}
            {dayTodos?.length > 0 ? (
              <div className="flex flex-col gap-2">
                {dayTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex justify-between items-center p-2 bg-white shadow rounded ${
                      todo?.checked ? "opacity-50 line-through" : ""
                    }`}
                  >
                    {/* Todo Info */}
                    <div className="flex flex-col">
                      <span className="font-medium">{todo.names}</span>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs bg-sky-200 px-2 py-0.5 rounded">
                          {todo?.dates}
                        </span>
                        <span className="text-xs bg-sky-200 px-2 py-0.5 rounded">
                          {todo?.times}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => console.log("Edit", todo.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleCheck(todo.id)}
                        className="text-green-500 hover:text-green-700"
                      >
                        <FaRegCheckCircle />
                      </button>
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm italic">
                No todos for this day
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Next7Days;
