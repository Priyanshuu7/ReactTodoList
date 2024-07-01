import { useState } from "react";
import "./AddTask.css";
export const AddTask = () => {
  const [task, setTask] = useState("");

  const handleAddTask = (event) => {
    setTask(event.target.value);
  };
  return (
    <section className="addtask">
      <form>
        <input
          onChange={handleAddTask}
          type="text"
          id="task"
          required
          placeholder="Add Task"
        />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" required />
        <button type="submit">Add Task</button>
      </form>
      <p>{task}</p>
    </section>
  );
};
