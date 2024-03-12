import React, { useEffect, useState } from "react";
import "./ShowPassword.css";

const ShowPassword = () => {
	const [changeInput, setChangeInput] = useState("");
	const [password, setPassword] = useState({});
	const [msg, setMsg] = useState({});
	const [str, setStr] = useState("");

	useEffect(() => {
		if (changeInput.length) {
			let newMsgDisplay = changeInput.length > 0 ? "block" : "none";
			let newMsgColor = "";
			let newBorderColor = "";

			if (changeInput.length < 4) {
				setStr("weak");
				newMsgColor = "#ff5925";
				newBorderColor = "#ff5925";
			} else if (changeInput.length >= 4 && changeInput.length < 8) {
				setStr("medium");
				newMsgColor = "yellow";
				newBorderColor = "yellow";
			} else if (changeInput.length >= 8) {
				setStr("strong");
				newMsgColor = "#26D730";
				newBorderColor = "#26D730";
			}

			// Cập nhật msg một lần với cả display và color
			setMsg((msg) => ({
				...msg,
				display: newMsgDisplay,
				color: newMsgColor,
			}));

			// Cập nhật màu viền một lần
			setPassword({ borderColor: newBorderColor });
		}
	}, [changeInput]);
	return (
		<div className="container">
			<div className="input-box">
				<input
					type="password"
					style={password}
					value={changeInput}
					id="showPassword"
					className={changeInput.length ? "" : ""}
					onChange={(e) => setChangeInput(e.target.value)}
					placeholder="Password"
				/>
				<p id="message" style={msg}>
					Password is <span id="strength"> {str}</span>
				</p>
			</div>
		</div>
	);
};

export default ShowPassword;
