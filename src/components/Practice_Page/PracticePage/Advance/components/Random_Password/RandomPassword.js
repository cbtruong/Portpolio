import React, { useState } from "react";
import "./RandomPassword.css";

import copy from "./images/copy.png";
import generate from "./images/generate.png";

const RandomPassword = () => {
	const [passwordBox, setPasswordBox] = useState("");

	var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var lowerCase = "abcdefghijklmnopqrstuvwxyz";
	var number = "0123456789";
	var symbol = "@#$%^&*()_+~|}{[]></-=";

	const allChars = upperCase + lowerCase + number + symbol;
	const length = 12;
	const handleCreatePassword = () => {
		var pass = "";
		pass += upperCase[Math.floor(Math.random() * upperCase.length)];
		pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
		pass += number[Math.floor(Math.random() * number.length)];
		pass += symbol[Math.floor(Math.random() * symbol.length)];
		while (length > pass.length) {
			pass += allChars[Math.floor(Math.random() * allChars.length)];
		}
		setPasswordBox(pass);
	};

	const handleCopyPassword = () => {
		const passwordInput = document.getElementById("password");
		passwordInput.select(); // Chọn nội dung của input
		document.execCommand("copy"); // Sao chép nội dung đã chọn
	};
	return (
		<div className="container">
			<h1>
				Generate a <br />
				<span>Random Password</span>
			</h1>
			<div className="display">
				<input type="text" id="password" defaultValue={passwordBox} placeholder={passwordBox} />
				<img src={copy} onClick={handleCopyPassword} alt="" />
			</div>
			<button onClick={handleCreatePassword}>
				<img src={generate} alt="" />
				Generate Password
			</button>
		</div>
	);
};

export default RandomPassword;
