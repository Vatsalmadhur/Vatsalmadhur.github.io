import React from "react";
import '../src/App.css'
import { Route ,Routes } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import About from "./components/About/about";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/project";
import Contact from "./components/Contact/contact";

function App() {


  return (
    <>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/skills' element={<Skills/>}/>
    <Route exact path='/project' element={<Project/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
       
      
    </>
  );
}

export default App;
