import './styles/App.css';
import './styles/style.scss';
import {Routes, Route, useLocation, useNavigate,} from "react-router-dom";
import Calendar from "./pages/Calendar";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Capabilities from "./pages/Capabilities";
import Login from "./pages/Login";
import {useEffect} from "react";




const App = () => {
    let location = useLocation();
    let navigate = useNavigate();
    useEffect(()=>{
        if (location.pathname === "/"){
            navigate("/login")
        }
 },[location.pathname])
    return (
         <Routes>
       <Route path="/login" element = {<Login />} />
       <Route path="/tasks" element = {<Tasks />} />
       <Route path="/calendar" element = {<Calendar />} />
       <Route path="/projects" element = {<Projects />} />
       <Route path="/capabilities" element = {<Capabilities />} />
         </Routes>
    );
}

export default App;


