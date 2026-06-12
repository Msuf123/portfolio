import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Contact from "./Routes/Contact/Contact";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
