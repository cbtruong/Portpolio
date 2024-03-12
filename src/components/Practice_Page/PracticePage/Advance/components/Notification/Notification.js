import React, { useRef } from "react";
import "./Notification.css";

const Notification = () => {
	const toastBoxRef = useRef(null);
	var successMsg =
		'<i className="fa-solid fa-circle-check"></i> Thành công khi nộp';
	var errorMsg =
		'<i className="fa-solid fa-circle-xmark"></i> Vui lòng sửa lỗi! error';
	var invalidMsg =
		'<i className="fa-solid fa-circle-exclamation"></i> Dữ liệu nhập không hợp lệ, vui lòng kiểm tra lại invalid';
	const handleShowToast = (msg) => {
		var toast = document.createElement("div");
		toast.classList.add("toast");
		toast.innerHTML = msg;
		if (toastBoxRef.current) {
			toastBoxRef.current.appendChild(toast);
		}
		if (msg.includes("error")) {
			toast.classList.add("error");
		}
		if (msg.includes("invalid")) {
			toast.classList.add("invalid");
		}
		setTimeout(() => {
			toast.remove();
		}, 6000);
	};
	return (
		<>
			<div className="buttons">
				<button onClick={() => handleShowToast(successMsg)}>
					Success
				</button>
				<button onClick={() => handleShowToast(errorMsg)}>Error</button>
				<button onClick={() => handleShowToast(invalidMsg)}>
					Invalid
				</button>
			</div>
			<div id="toastBox" ref={toastBoxRef}></div>
		</>
	);
};

export default Notification;
