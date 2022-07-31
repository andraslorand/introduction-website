import "./App.css";

import Navbar from "./components/design-tags/Navbat";
import { Routes, Route } from "react-router-dom";
import Settings from "./components/pages/Settings";
import MainPage from "./components/pages/MainPage";
import Projects from "./components/pages/Projects";
import Todo from "./components/projects/To-Do/Ttodo";
import Cal from "./components/projects/calculator/Cal";
import Count from "./components/projects/counter/Count";
import API from "./components/projects/APIcalls/API";
import Contact from "./components/pages/Contacr";


function App() {

  

  return (
    <div className="body">
      
      <Navbar></Navbar>

      
      <Routes>
       
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Todo" element={<Todo/>}/>
        <Route path="/Cal" element={<Cal/>}/>
        <Route path="/Count" element={<Count/>}/>
        <Route path="/API" element={<API/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
