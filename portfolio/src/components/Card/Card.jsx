import React from "react";
import './Card.css'
import { Source } from "../Sources/Pill";
 function Card(props){
     return(
         <>
            <div className="cardBody">
                {/* <div className="cardImg"><img src={props.image} alt="" className="cardImageInner" /></div> */}
                <div className="cardAbt">
                    <p className="cardAbt1">{props.heading}</p>
                    <p className="cardAbt2">{props.subHeading}</p>
                    {/* <p className="hvr">(Hover me!)</p> */}
                    {/* <a href={props.link} target="blank"><p className="cardAbt3">Github</p></a> */}
                    <div ><Source gitLink={props.gitLink} liveLink={props.liveLink} ytLink={props.ytLink} /></div>
                </div>
            </div>
         </>
     )
 }
 export default Card;