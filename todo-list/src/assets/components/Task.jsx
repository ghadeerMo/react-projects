import { useState } from "react";

export default function Task({ task, isCompleted, deleteTask, updateTask }) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const editTask = () => {
    setEditText(task.text);
    setEdit(true);
  };
  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => isCompleted(task.id)}
      />

      {edit ? (
        <>
          {" "}
          <input
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="save-btn"
            onClick={() => {
              updateTask(task.id, editText);
              setEdit(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div className={`task-text ${task.completed ? "cross-line" : ""}`}>
            {task.text}
          </div>
          <button className="edit-btn" onClick={editTask}>
            Edit
          </button>
        </>
      )}

      <div className="delete-btn" onClick={() => deleteTask(task.id)}>
        X
      </div>
    </div>
  );
}
