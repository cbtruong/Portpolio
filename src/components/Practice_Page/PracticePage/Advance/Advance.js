import React from "react";
import "./Advance.css";
import Title from "../../IdeaPage/Title";

import AgeCaculator from "./components/Age_Caculator/Age_Caculator";
import Notes from "./components/Notes/Notes";
import Popup from "./components/Popup/Popup";
import QRCodeGenerate from "./components/QR_CodeGenerate/QR_CodeGenerate";
import Notification from "./components/Notification/Notification";
import Quizziz from "./components/Quizziz/Quizziz";
import RandomPassword from "./components/Random_Password/RandomPassword";
import DarkMode from "./components/DarkMode/DarkMode";
import ShowPassword from "./components/ShowPassword/ShowPassword";
import Slide from "./components/Slide/Slide";

const Advance = ({ title }) => {
	return (
		<>
			<Title title={title} />
			<div className="practiceBasic_Frame ">
				<div className="contentFrame Frame_AgeCacultor">
					<AgeCaculator />
				</div>
				<div className="contentFrame Frame_Notes">
					<Notes />
				</div>
				<div className="contentFrame Frame_Popup">
					<Popup />
				</div>
				<div className="contentFrame Frame_QR_CodeGenerate">
					<QRCodeGenerate />
				</div>
				<div className="contentFrame Frame_Notification">
					<Notification />
				</div>
				<div className="contentFrame Frame_Quizziz">
					<Quizziz />
				</div>
				<div className="contentFrame Frame_RandomPassword">
					<RandomPassword />
				</div>
				<div className="contentFrame Frame_DarkMode">
					<DarkMode />
				</div>
				<div className="contentFrame Frame_ShowPassword">
					<ShowPassword />
				</div>
				<div className="contentFrame Frame_Slide">
					<Slide />
				</div>
				<div className="contentFrame">Frame 2</div>
				<div className="contentFrame">Frame 3</div>
			</div>
		</>
	);
};

export default Advance;
