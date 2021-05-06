import React from "react";
import "./../index.css";

const Footer = () => {
  return (
    <div className="footer-container">
        < div className="social__icons">
             <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/evan.mtku"
            >
              <i className="fab fa-facebook" title="facebook" id="facebook"></i>
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/evans-mutuku-5407391b9/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>

             {/* github */}
             <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Evans-mutuku/"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>
        </div>
        <div className="copyright">
          <i className="fas fa-copyright" title="copyright" id="copyright"></i> 
          <p className="copyright-name"> evansmutuku 2021 |  </p>
          <p> All rights reserved</p>
        </div>
    </div>
  );
};

export default Footer;
