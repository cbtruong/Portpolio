import React, { useState } from "react";
import "./Popup.css";
import Tick from "./tick.png";

const Popup = () => {
	const [openPopup,setOpenPopup]=useState(false);
	const handleOpenPopup = () => {
		setOpenPopup(true);
	};
	const handleClosePopup = () => {
		setOpenPopup(false);
	};
	return (
		<div className="container">
			<button className="btn" onClick={handleOpenPopup} type="submit">
				Submit
			</button>
			<div className={openPopup ? "popup open-popup" : "popup"} id="popup">
				<img src={Tick} alt="" />
				<h2>Thank You!</h2>
				<p>Your detail has been successfully submitted</p>
				<button type="button" onClick={handleClosePopup}>
					OK
				</button>
			</div>
		</div>
	);
};

export default Popup;
