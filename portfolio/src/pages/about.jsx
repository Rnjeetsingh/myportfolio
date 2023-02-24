import React from 'react';
import "../styles/about.css"

function AboutUs (){
    return (
      <div id="about"  className="pages">
        <div className="card">
          <div className="imgbx">
            <img src="https://media2.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" alt="" />
          </div>
          <div className="deta">
            <center>
              <h1>About Me</h1>
            </center>
            <center>
              <p>
                Hello! Everyone I am Ranjeet Singh. <br />
                A highly dedicated and passionate full-stack web developer with excellent administrative 
                and communication skills and the ability to write efficient code. Self motivated, quick-learner 
                and curious with proficiency in MERN stack. <span> Adaptive to new technology and environment.</span>
              </p>
            </center>
          </div>
        </div>
      </div>
    )
  }
  export default AboutUs

  