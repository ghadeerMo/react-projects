export default function Task({ task, isCompleted, deleteTask }) {
  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => isCompleted(task.id)}
      />
      <div className={`task-text ${task.completed ? "cross-line" : ""}`}>
        {task.text}
      </div>
      <div className="delete-btn" onClick={() => deleteTask(task.id)}>
        X
      </div>
    </div>
  );
}
