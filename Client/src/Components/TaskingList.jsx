import axios from "axios";
// In this TaskingList we create a frontend Structure form for Deleting Task and updating Status by Id ;

const TaskList = ({ tasks, fetchTasks }) => {
  const token = localStorage.getItem("token");

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:8000/api/tasking/${id}`, { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     fetchTasks();
    };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8000/api/tasking/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchTasks();
     };

  return (
    <ul className="task-list">
      {Array.isArray(tasks) &&
        tasks.map((task) => (
          <li key={task._id} className="task-item"> 
          <div className="task-actions">

            <h4>{task.title}</h4>
            <p>{task.description}</p>

            <select value={task.status}
              onChange={(e) => updateStatus(task._id, e.target.value)} >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
