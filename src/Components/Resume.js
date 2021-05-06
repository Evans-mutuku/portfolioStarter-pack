import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Resume = () => {
  return (
    <section
      data-aos="fade-up"
      className="achievements-container"
      name="resume"
      id="resume"
    >
      <h1 className="heading">My Resume</h1>
      <div className="projects-container">
        {/* Project 1 - React Basic */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >

          <div className="project-links">
            <div className="text">
              <h3>EDUCATION</h3>
            </div>
            <div className="qualifications">
             <h3>St Pauls University</h3>
             <p>1. Certificate in computer science 2018.</p> 
             <p>2. High Diploma in computer science 2021.</p>
             <p>3. Self taught fullstack javascript developer.</p>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - HTML5 */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >

          <div className="project-links">
            <div className="text">
              <h3>WORK</h3>
            </div>
            <div className="qualifications">
             <h3>Freelancing</h3> <br/>
             <p>Have been freelancing since 2019 to present, creating projects and teaching code. </p> <br/>
             <p>Am the founder of evansify.com a software development agency.</p>
            </div>
          </div>
        </motion.div>



      </div>
    </section>
  );
};

export default Resume;
