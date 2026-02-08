import Todo from "./assets/components/Todo";
import { use, useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="main">
      <Todo tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
