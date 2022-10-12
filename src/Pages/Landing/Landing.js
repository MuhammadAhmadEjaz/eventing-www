import React from "react";
import "./Landing.scss";
import ColoredButton from "../../Components/Buttons/ColoredButton/ColoredButton";
import Navbar from "../../Components/Navbar/Navbar";
import HeroArea from "./Components/HeroArea/HeroArea";

function Landing(props) {
  return (
    <div className="landing">
      <Navbar />
      <HeroArea/>
    </div>
  );
}

export default Landing;
