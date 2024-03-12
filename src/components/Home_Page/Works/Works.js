import React from "react";
import "./Works.css";
import Portpolio1 from "../../../assets/portfolio-1.png";
import Portpolio2 from "../../../assets/portfolio-2.png";
import Portpolio3 from "../../../assets/portfolio-3.png";
import Portpolio4 from "../../../assets/portfolio-4.png";
import Portpolio5 from "../../../assets/portfolio-5.png";
import Portpolio6 from "../../../assets/portfolio-6.png";

const Works = () => {
	return (
		<section id="works">
			<h2 className="worksTitle">My Achievements</h2>
			<span className="worksDesc">
				I take pride in paying attention to the smallest details and
				making sure that my work is pixel perfect. I am excited to bring
				my skills and experience to help businesses achieve their goals
				and create a strong online pressence.
			</span>
			<div className="worksImgs">
				<img src={Portpolio1} alt="" className="worksImg" />
				<img src={Portpolio2} alt="" className="worksImg" />
				<img src={Portpolio3} alt="" className="worksImg" />
				<img src={Portpolio4} alt="" className="worksImg" />
				<img src={Portpolio5} alt="" className="worksImg" />
				<img src={Portpolio6} alt="" className="worksImg" />
			</div>
			<button className="workBtn">See more</button>
		</section>
	);
};

export default Works;
