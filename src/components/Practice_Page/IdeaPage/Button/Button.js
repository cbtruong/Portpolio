import React from "react";
import "./Button.css";
import Title from "../Title";

const Button = ({ title }) => {
	return (
		<>
			<Title title={title} />
			<div className="btn-one frame">
				<button className="btn">Button One</button>
			</div>
			<div className="btn-two frame">
				<button className="btn">Button Two</button>
			</div>
			<div className="btn-three frame">
				<button className="btn">Btn Three</button>
			</div>
			<div className="btn-four frame">
				<button className="btn">
					<span>Button Four</span>
				</button>
			</div>
			<div className="btn-five frame">
				<button className="btn">Button Five</button>
			</div>
			<div className="btn-six frame">
				<button className="btn">Button Six</button>
			</div>
			<div className="btn-seven frame">
				<button className="btn">Button Seven</button>
			</div>
			<div className="btn-eight frame">
				<span className="btn">Button Eight</span>
			</div>
		</>
	);
};

export default Button;
