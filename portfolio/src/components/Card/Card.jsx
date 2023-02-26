import React from "react";
import './Card.css'
 function Card(props){
     return(
         <>
            <div className="cardBody">
                <div className="cardImg"><img src="{props.image}" alt="" /></div>
                <div className="cardAbt">
                    <p className="cardAbt1">{props.heading}</p>
                    <p className="cardAbt2">{props.subHeading}</p>
                </div>
            </div>
         </>
     )
 }
 export default Card;