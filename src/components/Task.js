import React from "react";

function Task({ text, category, onHandleTaskDelete }) {
  function handleDelete() {
    onHandleTaskDelete(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;