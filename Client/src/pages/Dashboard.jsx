import { useEffect, useState } from "react";
import TaskForm from "../Components/TaskingForm";
import TaskList from "../Components/TaskingList";
import axios from "axios";
 import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/tasking",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

      setTasks(res.data);
     } catch (error) {
       console.error("Failed to fetch tasks", error);
      }};

  useEffect(() => {
    fetchTasks();
  }, []);


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token") // It's logout handles function who removed token from localstroage and redirect to login page;
    navigate("/");
  };


  return (
    <div className="dashboard">
      <div className="dashboard-header">
      <h2>My Tasks</h2>
        <button  onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      {/* Passing props from parent to child Components */}
      <TaskForm fetchTasks={fetchTasks}/>  
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default Dashboard;
