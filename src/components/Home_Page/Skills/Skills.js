import React from "react";
import "./Skills.css";
import { Link } from "react-router-dom";

const Skills = () => {
	return (
		<section id="skills">
			<span className="skillTitle">What I do ?</span>
			<span className="skillDesc">
				I am a skilled and passionate web designer with experience in
				creating visually appealing and user-friendly websites. I have a
				strong understanding of design and a keen eye for detail. I am
				proficient in HTML, CSS, and JavaScript, as well as design
				software such as Adobe Photoshop and Illustrator
				<div className="skillBars">
					<Link to="/idea/practices">
						<div className="skillBar">
							<i className="fa-solid fa-dice-one skillBarImg"></i>
							<div className="skillBarText">
								<div>
									<h2>Practice Code</h2>
									<p>
										This is demo text, you can write your
										own content here
									</p>
								</div>
								<i className="fa-solid fa-angle-right skillBarImgRight"></i>
								<span>Next</span>
							</div>
						</div>
					</Link>
					<Link to="/idea/ideas">
						<div className="skillBar">
							<i className="fa-solid fa-dice-two skillBarImg"></i>
							<div className="skillBarText">
								<div>
									<h2>Advanced Design</h2>
									<p>
										This is demo text, you can write your
										own content here
									</p>
								</div>
								<i className="fa-solid fa-angle-right skillBarImgRight"></i>
								<span>Next</span>
							</div>
						</div>
					</Link>
					<Link to="/idea/ideas">
						<div className="skillBar">
							<i className="fa-solid fa-dice-three skillBarImg"></i>
							<div className="skillBarText">
								<div>
									<h2>Basic Design</h2>
									<p>
										This is demo text, you can write your
										own content here
									</p>
								</div>
								<i className="fa-solid fa-angle-right skillBarImgRight"></i>
								<span>Next</span>
							</div>
						</div>
					</Link>

					<Link to="/idea/ideas">
						<div className="skillBar">
							<i className="fa-regular fa-lightbulb skillBarImg"></i>
							<div className="skillBarText">
								<div>
									<h2>Idea Design</h2>
									<p>
										This is demo text, you can write your
										own content here
									</p>
									<span>Next</span>
								</div>
								<i className="fa-solid fa-angle-right skillBarImgRight"></i>
							</div>
						</div>
					</Link>
				</div>
			</span>
		</section>
	);
};

export default Skills;
