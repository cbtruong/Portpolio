import React from "react";
import "./Basic.css";
import Title from "../../IdeaPage/Title";

const Basic = ({title}) => {
	return (
		<>
			<Title title={title}/>
			<div className="practiceBasic_Frame">
				<div className="contentFrame">Frame 1</div>
				<div className="contentFrame">Frame 2</div>
				<div className="contentFrame">Frame 1</div>
				<div className="contentFrame">Frame 2</div>
				<div className="contentFrame">Frame 1</div>
				<div className="contentFrame">Frame 2</div>
			</div>
		</>
	);
};

export default Basic;
