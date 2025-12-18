//  In this The App component is the root component of a React application where all other components are combined;
import { BrowserRouter, Routes, Route } from "react-router-dom"; // react-router-dom helps React decide which page to show for each URL.
import './App.css';
import Login from "./Components/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./Routes/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute> 
            }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
