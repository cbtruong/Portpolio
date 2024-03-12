import React from "react";
import "./About.css";
import AboutImg from "../../../assets/MC/about.JPG";
import { useRef } from "react";

import imageMC1 from "../../../assets/MC/OLYMPIC_YEAR1.jpg";
import imageMC2 from "../../../assets/MC/olimpic cap truong 2022.jpg";

const About = () => {
	const scrollContainerRef = useRef(null);
	const handleNextClick = () => {
		const scrollContainer = scrollContainerRef.current;
		console.log("click next");
		if (scrollContainer) {
			scrollContainer.style.scrollBehavior = "smooth";
			scrollContainer.scrollLeft += 648;
		}
	};

	const handleBackClick = () => {
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.style.scrollBehavior = "smooth";
			scrollContainer.scrollLeft -= 648;
		}
	};
	return (
		<section className="about" id="about">
			<div className="about-img">
				<div className="backAbout" onClick={handleBackClick}>
					{"<"}
				</div>
				<div ref={scrollContainerRef}>
					<div className="portpolio-box">
						<img src={AboutImg} alt="" />
						<div class="portpolio-layer">
							<h4>Web Design</h4>
							<p>
								Teams across your business hit the ground
								running with enterprise workflow automation in
								the Content Cloud
							</p>
						</div>
					</div>
					<div className="portpolio-box">
						<img src={imageMC1} alt="" />
						<div class="portpolio-layer">
							<h4>Web Design</h4>
							<p>
								Teams across your business hit the ground
								running with enterprise workflow automation in
								the Content Cloud
							</p>
						</div>
					</div>
					<div className="portpolio-box">
						<img src={imageMC2} alt="" />
						<div class="portpolio-layer">
							<h4>Web Design</h4>
							<p>
								Teams across your business hit the ground
								running with enterprise workflow automation in
								the Content Cloud
							</p>
						</div>
					</div>
				</div>
				<div className="nextAbout" onClick={handleNextClick}>
					{">"}
				</div>
			</div>
			<div className="about-content">
				<h2 className="heading">
					About <span>Me</span>
				</h2>
				<h3>Initial Struggles, Ultimate Successes !</h3>
				<p>
					Take the work out of workflow Teams across your business hit
					the ground running with enterprise workflow automation in
					the Content Cloud. Get started quickly with pre-built
					departmental workflow templates and custom-configured
					templates, or create workflows in minutes with Relay's
					intuitive no-code builder. Work gets done faster — no IT
					tickets needed.
				</p>
				<a href="#" className="btn">
					Read More
				</a>
			</div>
		</section>
	);
};

export default About;
