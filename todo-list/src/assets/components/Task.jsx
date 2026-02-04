export default function Task({ task, isCompleted }) {
  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => isCompleted(task.id)}
      />
      <div className={task.completed ? "cross-line" : ""}>{task.text}</div>
    </div>
  );
}
