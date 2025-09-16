// import React, { useState } from "react";
// import { FaCheck, FaEdit, FaRegCheckCircle, FaTrash } from "react-icons/fa";

// const Today = () => {
//   const initialTodos = [
//     { id: 1, name: "", date: "09/07/2025", time: "10:00 AM", completed: false },
//     { id: 2, name: "", date: "09/07/2025", time: "2:00 PM", completed: false },
//   ];

//   const [todos, setTodos] = useState(initialTodos);

//   // Toggle complete
//   const handleCheck = (id) => {
//     setTodos((prev) =>
//       prev.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Delete todo
//   const handleDelete = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 bg-[#E1D8D9] rounded-lg shadow">
//       <h2 className="text-center text-lg font-semibold mb-4">
//         Your Todos List: ({todos.length})
//       </h2>

//       <div className="flex flex-col gap-3">
//         {todos.map((todo) => (
//           <div
//             key={todo.id}
//             className={`flex items-center justify-between p-3 bg-white rounded-md shadow ${
//               todo.completed ? "opacity-50 line-through" : ""
//             }`}
//           >
//             <div className="flex flex-col">
//               <span className="font-medium">{todo.name}</span>
//               <div className="flex gap-2 mt-1">
//                 <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
//                   {todo.date}
//                 </span>
//                 <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
//                   {todo.time}
//                 </span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => handleCheck(todo.id)}
//                 className="text-green-500 hover:text-green-700"
//               >
//                 <FaEdit />
//               </button>
//               <button
//                 onClick={() => handleCheck(todo.id)}
//                 className="text-green-500 hover:text-green-700"
//               >
//                 <FaRegCheckCircle />
//               </button>
//               <button
//                 onClick={() => handleDelete(todo.id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           </div>
//         ))}

//         {todos.length === 0 && (
//           <p className="text-center text-gray-500">No todos available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Today;
import React, { useContext, useState } from "react";
import { FaCheck, FaEdit, FaRegCheckCircle, FaTrash } from "react-icons/fa";
import { TodoContext } from "../../App";

const Today = ({ todos, setTodos }) => {
  const [showUI, setShowUI] = useState("");
  // const { todos, setTodos } = useContext(TodoContext);
  // console.log("todos from today component", todos);
  // Toggle complete
  const handleCheck = (id) => {
    setTodos((prev) =>
      prev?.map((todo) =>
        todo?.id === id ? { ...todo, checked: !todo?.checked } : todo
      )
    );
  };

  // Delete todo
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-[#E1D8D9] rounded-lg shadow">
      <h2 className="text-center text-lg font-semibold mb-4">
        {showUI === "today"
          ? `Today's Todos: (${todos?.length || 0})`
          : showUI === "next7"
          ? `Next 7 Days Todos: (${todos?.length || 0})`
          : `All Todos: (${todos?.length || 0})`}
      </h2>

      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between p-3 bg-white rounded-md shadow ${
              todo.checked ? "opacity-50 line-through" : ""
            }`}
          >
            <div className="flex flex-col">
              <span className="font-medium">{todo.names}</span>
              <div className="flex gap-2 mt-1">
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                  {todo.dates}
                </span>
                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                  {todo.times}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCheck(todo.id)}
                className="text-green-500 hover:text-green-700"
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
    </div>
  );
};

export default Today;
