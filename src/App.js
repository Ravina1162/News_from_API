import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  
  return (
    <>
      <Router>
      {/* Other components */}
      <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        {/* Other routes */}
      </Routes>
    </Router>
      
    </>
  );
}

export default App;


