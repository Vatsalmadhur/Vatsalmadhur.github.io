import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar(){

    return(
        <>
        <div className="mainBox">
        <div><Link to={"/"}>Home</Link></div>
        <div><Link to={"/project"}>Project</Link></div>

        <div><Link to={"/about"}>About</Link></div>


        <div><Link to={"/contact"}>Contact</Link></div>
        </div>

        </>


    


    )
}
export default Navbar;