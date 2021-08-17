import React, { useState, useRef } from "react";

const Todo = ({ index, todo, deleteTodo, updateTodo }) => {
  const [todoInput, setTodoInput] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);
  const todoInputRef = useRef();
  const editOnClick = () => {
    setIsEdit(true);
    todoInputRef.current.disabled = false;
    todoInputRef.current.focus();
  };

  const cancelOnClick = () => {
    setIsEdit(false);
    todoInputRef.current.disabled = true;
    setTodoInput(todo);
  };

  const saveOnClick = () => {
    setIsEdit(false);
    todoInputRef.current.disabled = true;
    updateTodo(index, todoInput);
  };

  const inputOnChange = (e) => setTodoInput(e.target.value);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      key={index}
    >
      <input
        value={todoInput}
        ref={todoInputRef}
        onChange={inputOnChange}
        style={{ border: "none" }}
        disabled
      />
      {isEdit ? (
        <>
          <button style={{ marginLeft: 5 }} onClick={saveOnClick}>
            save
          </button>
          <button style={{ marginLeft: 5 }} onClick={cancelOnClick}>
            cancel
          </button>
        </>
      ) : (
        <>
          <button onClick={editOnClick} style={{ marginLeft: 10 }}>
            edit
          </button>
          <button style={{ marginLeft: 5 }} onClick={() => deleteTodo(index)}>
            delete
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
