import { useState } from "react";

const TodoList = () => {
  let todolist = ["sleep", "wake up", "study", "work"];
  const [todos, setTodo] = useState(todolist);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodo([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          htmlFor="name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo"
        ></input>
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={Math.random()}> {todo} </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
