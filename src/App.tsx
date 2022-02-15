import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "src/Pages/Home";
import Register from "src/Pages/Register";
import Login from "src/Pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
