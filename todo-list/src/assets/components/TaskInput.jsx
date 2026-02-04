import { useState } from "react";
import Task from "./Task";

export default function TaskInput() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };
  const handleInput = (e) => {
    setNewTask(e.target.value);
  };

  const isCompleted = (id) => {
    setTasks((prev) => {
      return prev.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
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
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <Task
                task={task}
                isCompleted={isCompleted}
                deleteTask={deleteTask}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
