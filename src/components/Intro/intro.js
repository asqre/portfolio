import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import Typical from "react-typical";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Amit</span> <br />
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h3>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "a Web Dev ",
                    1000,
                    "a Programmer 🔴",
                    1000,
                    "a Software Developer",
                    1000,
                    "Ethusiastic Dev 🔴",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "Cross Platform Dev🌎",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                  ]}
                />
              </h3>
            </span>
          </div>
        </span>
        <p className="introPara">
          I am a skilled web Developer with experience in creating <br />{" "}
          visually appealing and user friendly websites.
        </p>
        <div className="btnSpace">
          <a href="AmitAnand_1YOE_FullStack_Dev.pdf" target="_blank">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg"></img>
    </section>
  );
};

export default Intro;
