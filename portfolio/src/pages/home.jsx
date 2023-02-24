import React from 'react'
import '../styles/home.css';
import 'font-awesome/css/font-awesome.min.css';


function Home (){
  return (
    <div id="home" className="pages">
        <div className="box">
            <div className="data">
                <h2>Hi,<img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"></img> My name is </h2>
                <h1 id="user-detail-name">Ranjeet Singh</h1>
                <p id="user-detail-intro">I am a goal-oriented, productive and aspiring MERN-Stack web developer. Excited to become an integral part of an organization.</p>
                <a target="_blank" href="https://drive.google.com/file/d/1P6D6Y0_O0wJ1tlU92_PbmtldAad4I3eD/view">
                    <button id="resume-button-1">Resume  <i className="fa fa-download"></i></button>
                </a>
            </div>
        </div>
        <div className="box">
            <div className="imgbx">
                <img className="home-img" src="https://i.ibb.co/X8c88JK/port.png" />
            </div>
        </div>
    </div>
  )
}

export default Home

