import React from "react";
import "./HeroArea.scss";
import HeroVector from "../../../../Assets/Images/HeroVector.png";
import Heart from "../../../../Assets/Images/Heart.png";
import { Grid } from "@mui/material";
import SearchBar from "../../../../Components/SearchBar/SearchBar/SearchBar";
import { ReactComponent as Cloud } from "../../../../Assets/Images/Cloud.svg";
import { ReactComponent as Layer } from "../../../../Assets/Images/Layer.svg";
import { ReactComponent as Pallete } from "../../../../Assets/Images/Pallete.svg";
import { ReactComponent as Fork } from "../../../../Assets/Images/Fork.svg";

function HeroArea(props) {
  //data
  const heroFeatureContent = [
    { text: "Venue Booking", vector: <Cloud className="feature-vector" /> },
    { text: "Food", vector: <Layer className="feature-vector" /> },
    { text: "Powang Hugan", vector: <Pallete className="feature-vector" /> },
    { text: "Decor", vector: <Fork className="feature-vector" /> },
  ];

  //hero feature component
  const HeroFeature = ({ text, vector }) => {
    return (
      <div className="hero-feature-outer">
        <div className="feature-vector-outer">{vector}</div>
        <div className="feature-text-outer">
          <p className="feature-text">{text}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="hero-area">
      <img src={HeroVector} alt="Love" className="hero-vector" />
      <Grid container>
        <Grid item md={6}>
          <div className="hero-left-outer">
            <h1 className="thin-heading">
              When Your{" "}
              <span style={{ marginLeft: "20px" }}>
                <img src={Heart} width={"25px"} alt="Love" />
              </span>
            </h1>
            <h1 className="bold-heading">Dream Wedding comes true</h1>
            <p>
              "Once in a While, right in the middle of an ordinary life, love
              gives us a fairy tale"
            </p>
            <div className="search-bar-container">
              <SearchBar />
            </div>
            <div className="features-container">
              <Grid container>
                {heroFeatureContent.map((feature) => {
                  return (
                    <Grid item xs={6}>
                      <HeroFeature
                        text={feature.text}
                        vector={feature.vector}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className="hero-right-outer">right</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroArea;
