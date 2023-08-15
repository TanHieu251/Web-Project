import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import statements

function App() {
  return (
    <Router>
      <div>
        <Routes> {/* Use Routes component */}
          <Route path="/" element={<Login />} /> {/* Use Route component */}
          <Route path="/register" element={<Register />} /> {/* Use Route component */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Use Route component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
