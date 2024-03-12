import React from "react";
import "./Title.css";

const Title = ({ title }) => {
	return (
		<div className="ideaBtnTitle">
			<span>
				{title}
				<br />
			</span>
			<span className="desc">Open-Source buttons made with CSS</span>
		</div>
	);
};

export default Title;
