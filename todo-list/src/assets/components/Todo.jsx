import React from "react";
import TaskInput from "./TaskInput";

export default function Todo({ tasks, setTasks }) {
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <TaskInput tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
