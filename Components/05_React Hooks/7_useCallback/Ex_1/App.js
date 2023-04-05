import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

export const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  // const addTodo = () => {
  //   setTodo(() => {
  //     return [...todos, "NewTodos"];
  //   });
  // };

  const addTodo = useCallback(() => {
    setTodos(() => {
      return [...todos, "newTodo"];
    });
  }, [todos]);

  return (
    <>
      <button onClick={increment}>Increment {count}</button>

      <Todos todos={todos} setTodos={addTodo} />
    </>
  );
};
