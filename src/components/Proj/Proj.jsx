import { Button, Typography } from "@mui/material";
import React from "react";
import "./Proj.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import proj1 from "../../Images/Project1.png"
import proj3 from "../../Images/Project3.png"
import proj5 from "../../Images/Project-5.png"
import proj6 from "../../Images/Project6.png"
import proj4 from "../../Images/Project4.png"
import proj2 from "../../Images/Project2.png"
import proj7 from "../../Images/Project7.png"
import visalta from "../../Images/Visalta.jpg"
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsMailbox } from "react-icons/bs";
export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    github,

    id,
  }) => {
   
  
    return (
      <>
        <a href={url} className="projectCard" target="blank">
          <div>
            <img src={projectImage} alt="Project" />
            <Typography variant="h5">{projectTitle}</Typography>
          </div>
          <div>
            <Typography variant="h4"> About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Stack: {technologies}</Typography>
            <a href={github} target="_blank"><Typography variant="h3"><BsGithub/></Typography></a>
            


          </div>
        </a>
  
        
      </>
    );
  };
const Proj = () => {
    return (
        <div className="projects">
          <Typography variant="h3">
            Projects <AiOutlineProject />
          </Typography>
    
          <div className="projectsWrapper">
          <ProjectCard
                id={"1"}
                key={"1"}
                url={"https://visalta-final-qg3f.vercel.app/"}
                
                projectImage={visalta}
                projectTitle={"Visalta-NITW"}
                github={"https://github.com/ashishty23/visalta_final"}
                description={" Leading a team of four to develop Visalta, platform enhancing student life at NIT Warangal"}
                technologies={"Reactjs,Tailwind,Expressjs,MongoDB,Nodejs"}
              />
            
              <ProjectCard
                id={"1"}
                key={"1"}
                url={"https://darshstudynotion1718.vercel.app/                                                     "}
                
                projectImage={proj1}
                projectTitle={"ED-TECH WEBSITE"}
                github={"https://github.com/darsh609/StudyNotion-Project-Mern.git"}
                description={" Revolutionize Learning with Our Ed-Tech Platform: Discover interactive lessons, personalized learning paths, and collaborative tools designed to empower educators and inspire students."}
                technologies={"Reactjs,Tailwind,Expressjs,MongoDB,Nodejs"}
              />
               <ProjectCard
                id={"1"}
                key={"1"}
                url={"https://darsh-promptopia-nextjs-phi.vercel.app/                     "}
                github={"https://github.com/darsh609/promptopia.git"}
                projectImage={proj2}
                projectTitle={"PROMPTOPIA"}
                description={"Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts"}
                technologies={"Nextjs,Tailwind,Expressjs,MongoDB"}
              />
                
                
              
              <ProjectCard
                id={"1"}
                key={"1"}
                url={"https://englsihgyaani-audio-fetching.web.app/"}
                projectImage={proj7}
                github={"https://github.com/darsh609/Englishgyaani-iisc.git"}

                projectTitle={"AUDIO-FETCHING DASHBOARD ENGLISHGYAANI"}
                description={"EnglishGyaani Dashboard: Users fetch and listen to audio clips based on their queries, facilitating targeted word learning to enhance their English language skills."}
                technologies={"Reactjs,Tailwind,Firebase"}
              />
               
               <ProjectCard
                id={"1"}
                key={"1"}
                url={"https://moonlit-bonbon-d9ca5d.netlify.app/"}
                projectImage={proj4}
                github={"https://github.com/darsh609/shoppingcart.git"}
                projectTitle={"E-COMMERCE"}
                description={" Revolutionize your online shopping experience with our innovative Shopping Cart website project. Seamlessly browse, select, and purchase products with user-friendly navigation and intuitive design."}
                technologies={"Reactjs,Tailwind"}
              />
              <ProjectCard
                id={"1"}
                key={"1"}
                url={"https://weatherreportdk.netlify.app"}
                github={"https://github.com/darsh609/weatherforca.git"}

                projectImage={proj3}
                projectTitle={"WEATHER-FORECAST"}
                description={" Stay ahead of the elements with our Weather Forecast website! Get up-to-the-minute weather updates, accurate forecasts, and personalized insights tailored to your location."}
                technologies={"Javascript,CSS,HTML"}
              />
            <ProjectCard
                id={"1"}
                key={"1"}
                url={"https://tictacjs.vercel.app/"}
                github={"https://github.com/darsh609/Tic-Tc-JS.git"}
                projectImage={proj5}
                projectTitle={"TIC-TAC"}
                description={"TIC-TAC is a dynamic website project designed to offer users a fun and interactive platform for playing the classic game of Tic-Tac-Toe online. "}
                technologies={"Javascript,CSS,HTML"}
              />
             
              <ProjectCard
                id={"1"}
                key={"1"}
                url={"https://top-course-lyart.vercel.app/"}
                projectImage={proj6}
                github={"https://github.com/darsh609/top-course.git"}
                projectTitle={"EDUCATIONAL-PLATFORM"}
                description={"EDUCATIONAL PLATFORM is an innovative online platform offering a curated selection of high-quality courses across various disciplines"}
                technologies={"Reactjs,Tailwind"}
              />
          </div>
    
          <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
            All The Projects Shown Above Are Made By Me <FaRegSmileWink />
          </Typography>
        </div>
      );
}

export default Proj