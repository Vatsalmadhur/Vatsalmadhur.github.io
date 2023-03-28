import React from "react";
import './Card.css'
 function Card(props){
     return(
         <>
            <div className="cardBody">
                <div className="cardImg"><img src={props.image} alt="" className="cardImageInner" /></div>
                <div className="cardAbt">
                    <p className="cardAbt1">{props.heading}</p>
                    <p className="cardAbt2">{props.subHeading}</p>
                    <a href={props.link}><p className="cardAbt3">Github</p></a>
                </div>
            </div>
         </>
     )
 }
 export default Card;