import React, { useState } from "react";
import "./DarkMode.css";

import moon from "./images/moon.png";
import sun from "./images/sun.png";

const DarkMode = () => {
	const [dark, setDark] = useState(true);
	const handleChange = () => {
		if (dark) {
			document.documentElement.style.setProperty("--bg", "black");
			document.documentElement.style.setProperty(
				"--textDark",
				"rgb(192, 165, 115)"
			); // Đặt màu nền thành đen nếu dark = true
		} else {
			document.documentElement.style.setProperty(
				"--bg",
				"rgb(192, 165, 115)"
			);
			document.documentElement.style.setProperty("--textDark", "white"); // Đặt màu nền thành màu khác nếu dark = false
		}
		setDark(!dark);
	};
	return (
		<div className="container">
			<div className="icons" onClick={handleChange}>
				{dark ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
			</div>
			<div className="content">
				<span>Dark Mode</span>
			</div>
		</div>
	);
};

export default DarkMode;
