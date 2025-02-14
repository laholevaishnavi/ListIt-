import React from "react";
import Todo from "./ToDo";

function TodoContainer({ todos ,delTodo }) {
  return (
    <div className="container">
      {todos.map((todo , index) => (
        <Todo todo={todo} index={index} delTodo={delTodo}  />
      ))}
    </div>
  );
}

export default TodoContainer;
