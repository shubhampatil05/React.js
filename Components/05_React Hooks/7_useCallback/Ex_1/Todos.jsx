import React from "react";

const Todos = ({ todos, setTodos }) => {
  console.log("Function Render");

  return (
    <>
      <button onClick={setTodos}>addTodo</button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default React.memo(Todos);
