import "./AddTask.css";
export const AddTask = () => {
  return (
    <section className="addtask">
      <form>
        <label htmlFor="task">Task</label>
        <input type="text" id="task" required placeholder="Add Task" />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" required />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
