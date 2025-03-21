import React from "react";
import './Button.css'
function Button(props){

    return(
        <>
        <div className="btnBody"><a href="https://github.com/Vatsalmadhur?tab=repositories" className="btnTxt">{props.text}</a></div>
        
        </>
    )
}
export default Button;