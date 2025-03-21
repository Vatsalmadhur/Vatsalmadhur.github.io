import React from "react";
import './Card.css'
import { Source } from "../Sources/Pill";
 function Card(props){
     return(
         <>
            <div className="cardBody">
                <div className="cardAbt">
                    <p className="cardAbt1">{props.heading}</p>
                    <p className="cardAbt2">{props.subHeading}</p>
                    <div ><Source gitLink={props.gitLink} liveLink={props.liveLink} ytLink={props.ytLink} /></div>
                </div>
            </div>
         </>
     )
 }
 export default Card;