import React, { useEffect, useState } from "react";
import "./Notes.css";
import edit from "./images/edit.png";
import Delete from "./images/delete.png";
import notes from "./images/notes.png";

const Notes = () => {
	const [listNotes, setListNotes] = useState([]);
	const [pageLoaded, setPageLoaded] = useState(false);

	useEffect(() => {
		const storedNotes = localStorage.getItem("notes");
		if (storedNotes) {
			setListNotes(JSON.parse(storedNotes));
		}
	}, []);

	useEffect(() => {
		if (pageLoaded) {
			// Chỉ chạy useEffect khi trang đã được tải lần đầu tiên
			try {
				localStorage.setItem("notes", JSON.stringify(listNotes));
			} catch (error) {
				console.error("Lỗi khi cập nhật localStorage:", error);
			}
		} else {
			setPageLoaded(true); // Đánh dấu trạng thái của trang khi trang được tải lần đầu tiên
		}
	}, [listNotes, pageLoaded]);

	const handleContentChange = (e, index) => {
		try {
			const updateNote = [...listNotes];
			updateNote[index].content = e.target.value;
			setListNotes(updateNote);
		} catch (error) {
			console.error("Lỗi khi cập nhật listNotes:", error);
		}
	};
	const handleAdd = () => {
		setListNotes([...listNotes, { content: "" }]);
	};

	const handleDelete = (e, index) => {
		try {
			const updateNote = [...listNotes];
			updateNote.splice(index, 1);
			setListNotes(updateNote);
		} catch (error) {
			console.error("Lỗi khi xóa ghi chú:", error);
		}
	};
	return (
		<>
			<div className="container">
				<h1>
					<img src={notes} alt="" />
					Notes
				</h1>
				<button className="btn" onClick={handleAdd}>
					{" "}
					<img src={edit} alt="" />
					Create Notes
				</button>
				<div className="notes-container">
					{listNotes?.map((item, index) => (
						<div className="note" key={index}>
							<textarea
								value={item.content}
								className="input-box"
								onChange={(e) => handleContentChange(e, index)}
							/>
							<img
								src={Delete}
								alt=""
								onClick={(e) => handleDelete(e, index)}
							/>
						</div>
					))}
					{/* contentditable="true" => cho phép gõ văn bản trong thẻ */}
					{/* <p contenteditable="true" class="input-box">
                            <img src="images/delete.png" alt="">
                        </p> */}
				</div>
			</div>
		</>
	);
};

export default Notes;
