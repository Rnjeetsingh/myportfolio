import { Link } from "react-router-dom";
import "../styles/navbar.css";
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import Media from 'react-media';

function Navbar(){

	$(document).on("click",".menubx",function(){
		$("header").removeClass('active')
	});
	$(document).on("click",".showHead",function(){
		$("header").toggleClass('active')
	})

    return (
        <header id="nav-menu">
			<i className="fa fa-arrow-right showHead"></i>
			<ul>
				<a href="#home">
					<div className="menubx">
						<li>Home</li>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
						<span className="line4"></span>
					</div>
				</a>
				<a href="#about">
					<div className="menubx">
						<li>About</li>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
						<span className="line4"></span>
					</div>
				</a>
				<a href="#skills">
					<div className="menubx">
						<li>Skills</li>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
						<span className="line4"></span>
					</div>
				</a>
				<a href="#projects">
					<div className="menubx">
						<li>Projects</li>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
						<span className="line4"></span>
					</div>
				</a>
				<a href="#contact">
					<div className="menubx">
						<li>Contact</li>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
						<span className="line4"></span>
					</div>
				</a>
			</ul>
        </header>
    )
}

export default Navbar