import React from 'react';


const About = ( { Icon}) => {
    return (
        <section      data-aos="fade-right"
        className="skills-container"
        name="about"
        id="about">
             <h1 className="heading">Hello, am Evans full-stack web developer and this is What I Do on my Best &nbsp;&nbsp;</h1>
             <div className="techs">
                <li>         
                <i class="fab fa-html5"></i>
                <p>HTML5</p> 
                </li>
                <li>
                <i className="fab fa-css3"></i>
                <p>CSS3</p>
                
                </li>
                <li>
                <i className="fab javascript fa-js"></i>
                <p>Javascript</p>
                </li>
                <li>
                <i className="fab react fa-react"></i>
                <p>React</p>
                </li>
                <li>
                <i className="fab react fa-node"></i>
                <p>Node.js</p>
                </li>
                <li>
                <i className="fab python fa-python"></i>
                <p>Python</p>
                </li>
              </div>
        </section>
    )
}

export default About

