import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="flex flex-col">
        <Header />
        <Main />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
