import React, { useState } from "react";
import "./QR_CodeGenerate.css";

const QR_CodeGenerate = () => {
	const [srcImg, setSrcImg] = useState(null);
	const [qrText, setQrText] = useState("");
	const [imgBox, setImgBox] = useState(false);
	const [error, setError] = useState(false);
	// document.getElementById("qrText")
	//var qrText = document.getElementById("qrText");
	//var imgBox = document.getElementById("imgBox");

	const handleGenerateQR = () => {
		if (qrText.length > 0) {
			setSrcImg(
				"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
					qrText
			);
			setImgBox(true);
		} else 
		{
			setImgBox(false);
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 1000);
		}
	};
	return (
		<div className="container">
			<p>Enter your text or URL</p>
			<input
				type="text"
				id="qrText"
				placeholder="Text or URL"
				className={error ? "error" : ""}
				onChange={(e) => setQrText(e.target.value)}
			/>
			<div id="imgBox" className={imgBox? "show-img" : ""}>
				<img
					src={srcImg}
					id="qrImage"
					alt=""
					
				/>
			</div>
			<button onClick={handleGenerateQR}>Generate QR Code</button>
		</div>
	);
};

export default QR_CodeGenerate;
