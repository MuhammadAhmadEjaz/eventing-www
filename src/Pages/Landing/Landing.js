import React from "react";
import "./Landing.scss";
import ColoredButton from "../../Components/Buttons/ColoredButton/ColoredButton";

function Landing(props) {
  return (
    <div className="landing">
      <div className="test">
        <ColoredButton text={'Sign Up'}></ColoredButton>
      </div>
    </div>
  );
}

export default Landing;
