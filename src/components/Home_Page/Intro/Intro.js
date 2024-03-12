import React from "react";
import "./Intro.css";
import bg from "../../../assets/Object_Four.gif";
import btnImg from "../../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
	return (
		<section id="intro">
			<div className="introContent">
				<span className="hello">Hello,</span>
				<div>
					<span className="introText">I'm&nbsp;</span>
					<span className="introName"> CB.Trường </span>
					<br />
				</div>
				Website Designer
				<p className="introPara">
					I'm a skilled web designer width experience in creating{" "}
					<br />
					visually appealing and user friendly website
				</p>
				<Link to="/">
					<button className="btn">
						Download CV
						<img src={btnImg} alt="Hire Me" className="btnImg" />
					</button>
				</Link>
			</div>
			<img src={bg} className="bg" alt="Profile" />
		</section>
	);
};

export default Intro;
