import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 // In this page we create a login structure and connects with backend auth logics 

const Login = () => {
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Here it's sends request from frontend to backend server
      const res = await axios.post("http://localhost:8000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); // Setitems data into localstorage ; 
        navigate("/dashboard");}
        catch (error) {
       alert("Incorrect email or password")}
  };

  return (
    <div className="login-container">

    <form onSubmit={handleLogin} className="login-box">
      <h2>Login</h2>

      <input type="email" placeholder="Email" 
      onChange={(e) => setEmail(e.target.value)} required/>

      <input
        type="password" placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} required/>

      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
