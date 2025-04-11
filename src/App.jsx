import React, { Suspense } from "react";
import '../src/App.css';
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loader/Loading";
import Navbar from "./components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Home from '../src/components/Home/Home'
// import About from "./components/About/about";
import Contact from "./components/Contact/contact";
// import Skills from "./components/Skills/Skills";
// import Project from "./components/Projects/project";

// const Home = React.lazy(() => import('./components/Home/Home.jsx'));
const About = React.lazy(() => import("./components/About/about"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
const Project = React.lazy(() => import("./components/Projects/project"));
// const Contact = React.lazy(() => import("./components/Contact/contact"));
// const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));

function App() {
  return (
    <>
    <SpeedInsights/>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/skills" element={<Skills />} />
                <Route exact path="/project" element={<Project />} />
              </Routes>
            </Suspense>

          }
/>
<Route exact path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
