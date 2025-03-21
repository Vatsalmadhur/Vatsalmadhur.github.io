import React, { Suspense } from "react";
import '../src/App.css';
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('./components/Home/Home.jsx'));
const About = React.lazy(() => import("./components/About/about"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
const Project = React.lazy(() => import("./components/Projects/project"));
const Contact = React.lazy(() => import("./components/Contact/contact"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;
