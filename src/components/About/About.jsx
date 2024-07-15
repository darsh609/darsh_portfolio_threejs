import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
import img from "../../Images/darsh.jpg"
const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
        Code is like humor. When you have to explain it, it’s bad.



        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={img} alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
          Darsh Kumar
          </Typography>

          <Typography>FULL-STACK DEVELOPER</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
          MERN STACK
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >I am a full-stack developer specializing in the MERN stack, with expertise in frameworks like Next.js and Three.js. Additionally, I have strong skills in Data Structures and Algorithms (DSA) and proficiency in C++.
          
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;