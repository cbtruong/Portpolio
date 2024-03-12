import React, { useEffect, useState } from "react";
import "./Age_Caculator.css";

const Age_Caculator = () => {
	const [userInput, setUserInput] = useState("");
	const [result, setResult] = useState("");
	const today = new Date().toISOString().split("T")[0];

	const handleDateChange = (e) => {
		setUserInput(e.target.value);
	};
	const handleCalculateAge = (e) => {
		var birthDate = new Date(userInput.value);
		var d = birthDate.getDate;
		var m = birthDate.getMonth;
		var y = birthDate.getFullYear;

		var d1 = today.getDate;
		var m1 = today.getMonth + 1;
		var y1 = today.getFullYear;

		var d3, m3, y3;
	};
	return (
		<>
			<div className="container">
				<div className="calculator">
					<h1>
						ReactJS <br />
						<span>Age Calculator</span>
					</h1>
					<div className="input-box">
						<input
							onChange={handleDateChange}
							type="date"
							id="date"
							max={today}
						/>
						<button onClick={handleCalculateAge()}>
							Calculator
						</button>
					</div>
					<p id="result" />
				</div>
			</div>
		</>
	);
};

export default Age_Caculator;
