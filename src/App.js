import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import Projects from "./components/Projects";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route path="/" element = {<Login />} />
              <Route path="/calendar" element = {<Calendar />} />
              <Route path="/projects" element = {<Projects />} />
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
