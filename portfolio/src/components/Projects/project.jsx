import React from "react";
import "./Project.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";


function project() {
  return (
    <>
    <Navbar/>
    <div className="bodyOfProject">
      <div className="mainOfProject">
        <div className="leftProject">
          <p className="projTxt1">Projects</p>
          <p className="projTxt2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis
            debitis eligendi incidunt quisquam non itaque consequatur ea
            obcaecati animi alias ipsum tempora repudiandae voluptates autem,
            veniam dicta laudantium sed eveniet nam. Eius a dignissimos,
            molestias tempora saepe aliquam iure incidunt ipsa laborum
            architecto in sed facilis, suscipit recusandae iusto?
          </p>
          <Button text={"More"} />
        </div>
        <div className="rightProject">
          <div className="card1">
            <Card />
          </div>
          <div className="card2">
            <Card />
          </div>
          <div className="card3">
            <Card />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default project;
