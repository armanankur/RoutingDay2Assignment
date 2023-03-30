import React from "react";
import styled from "./AboutUs.module.css";
// import Navbar from "./Navbar";
const AboutUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={styled.mainContainer}>
        <h1>About Us |</h1>

        <section className={styled.wrapper}>
          <div className={styled.first}>
            <img
              src="https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <small>Age : 25</small>
            <small>Location : India</small>
          </div>
          <div>
            <h1>ANKUR ANAND</h1>
            <p>
              I am a BE Graduate seeking for a job in FrontEnd Domain, to
              enhance my professional skills, capabilities and knowledge in an
              organization which recognizes the value of hard work and trusts me
              with responsibilities and challenges.
            </p>
            <div className={styled.container}>
              <div className={styled.skill}>
                <h4>What are my Skills ? </h4>
                <ul className={styled.list}>
                  <li>Html 5</li>
                  <li>Css 3</li>
                  <li>Javascript</li>
                  <li>React Js</li>
                </ul>
              </div>
              <div className={styled.skill}>
                <h4>What are my Hobbies ? </h4>
                <ul className={styled.list}>
                  <li>Music</li>
                  <li>Badminton</li>
                  <li>Travelling</li>
                  <li>Cricket</li>
                </ul>
              </div>
              <div className={styled.skill}>
                <h4>What are my Learning ? </h4>
                <ul className={styled.list}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT JS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
