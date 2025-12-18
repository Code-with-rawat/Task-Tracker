import { useState } from "react";
import axios from "axios";

// In this TaskingForm we create a frontend Structure form for Entering and posting Title , Description and Status;
const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = async (e) => {
    e.preventDefault(); // It commands to the browser don't reload  page from yourself, I'll handle this; 

    await axios.post("http://localhost:8000/api/tasking",
      {title,description, status
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }, //  Token get from localStorage and authenticate here ;
      });

      setTitle("");
       setDescription("");
      setStatus("Pending");
      fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input placeholder="Description" value={description}
        onChange={(e) => setDescription(e.target.value)} />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
