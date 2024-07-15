import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsMailbox } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Darsh Kumar. I'm a Full-Stack Developer and this is my portfolio website.Here you'll learn about my journey as a Programmer. 
          
        </Typography>
      
        <a href="https://leetcode.com/u/darshkumar0609/" target="blank">
          <Typography >LeetCode</Typography>
        </a>
        <a href="https://www.geeksforgeeks.org/user/darshkum04dv/" target="blank">
          <Typography >GeeksforGeeks</Typography>
        </a>
        <a href="https://www.naukri.com/code360/profile/0688589c-c750-49cf-a523-9dc9ff1c0d89" target="blank">
          <Typography >CodeStudio</Typography>
        </a>


      
        


        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
        
             </div>
      
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/darsh609" target="blank">
          <BsGithub />
        </a>
        <a href="mailto:darshkumar0609@gmail.com" target="blank">
          <BsMailbox/>
        </a>
        <a href="https://www.instagram.com/darsh__1718/" target="blank">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/dk1718" target="blank">
          <BsLinkedin />
        </a>
        
      
      </div>
    </div>
  );
};

export default Footer; 