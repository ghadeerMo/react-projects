import { useState } from "react";
import Task from "./Task";

export default function TaskInput() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks((prev) => [...prev, newTask]);
    setNewTask("");
  };
  const handleInput = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          onChange={handleInput}
          value={newTask}
          type="text"
          placeholder="Add new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <Task task={task} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
