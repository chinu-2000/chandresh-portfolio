import React from "react";
import "./header.css";
// import { VscCloudDownload } from "react-icons/vsc";
// import { FaSun } from "react-icons/fa";
// import { FaMoon } from "react-icons/fa";

function Header() {
  return (
    <div className="main-info">
      {/* <div className="t">
        <FaSun color="yellow" size={"22px"} />
        <FaMoon color="yellow" size={"22px"} />
        <div className="t-button"></div>
      </div> */}

      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h1 style={{ fontSize: "60px" }}>
              <b>Hii I am</b>
            </h1>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Front End Developer</div>
                <div className="i-title-item">Based in INDIA</div>
                <div className="i-title-item">
                  Aspiring to be a Full-Stack Developer
                </div>
                <div className="i-title-item">Front End Developer</div>
                <div className="i-title-item">Based in INDIA</div>
              </div>
            </div>

            {/* <div className="button-res">
              <a
                href="/src/images/Chandresh-Pandey-Resume.pdf"
                download
                className="download-btn"
              >
                <button type="button" className="button-download">
                  Get Resume
                  <VscCloudDownload size={"2rem"} />
                </button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
