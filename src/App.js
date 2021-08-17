import "./styles.css";
import { useState } from "react";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    setTodos((prevState) => [...prevState, input]);
  };

  const deleteTodo = (index) => {
    setTodos((prevState) => {
      const todosCP = [...prevState];
      todosCP.splice(index, 1);
      return todosCP;
    });
  };

  const updateTodo = (index, value) => {
    const array = [...todos];
    array[index] = value;
    setTodos(array);
  };

  return (
    <div className="App">
      <input onChange={getInput} />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
