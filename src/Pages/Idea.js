import React, { useState } from "react";
import "./Idea.css";
import { Route, Routes, useParams } from "react-router-dom";
import LeftMenu from "../components/Practice_Page/LeftMenu.js";
import Buttons from "../components/Practice_Page/IdeaPage/Button/Button.js";
import Inputs from "../components/Practice_Page/IdeaPage/Input/Input.js";
import Others from "../components/Practice_Page/IdeaPage/Other/Other.js";

import Basics from "../components/Practice_Page/PracticePage/Basic/Basic.js";
import Advances from "../components/Practice_Page/PracticePage/Advance/Advance.js";

const Idea = () => {
	let { practice } = useParams();
	const [ideaTitle, setIdeaTitle] = useState(0);
	const ideaList = [
		{
			header: "ideas",
			menu: [
				{
					Title: "Buttons",
					childSkill: "",
				},
				{
					Title: "Input",
					childSkill: "input",
				},
				{
					Title: "Others",
					childSkill: "others",
				},
			],
		},
		{
			header: "practices",
			menu: [
				{
					Title: "Basic",
					childSkill: "",
				},
				{
					Title: "Advance",
					childSkill: "advances",
				},
				{
					Title: "Others",
					childSkill: "others",
				},
			],
		},
	];
	console.log(practice);
	return (
		<div className="idea">
			<div className="ideaSession">
				{ideaList.map((item, index) => {
					// Kiểm tra điều kiện và chỉ render LeftMenu nếu item khớp với skill
					if (item.header === practice) {
						return (
							<LeftMenu
								key={index} // Sử dụng index làm key cho mỗi item duy nhất
								menu={item.menu}
								ideaTitle={ideaTitle}
								setIdeaTitle={setIdeaTitle}
								practice={practice}
							/>
						);
					}
					// Trả về null nếu không có khớp nối, không thêm gì vào DOM
					return null;
				})}
				<div className="ideaBtnContent">
					<Routes>
						{practice === "ideas" || practice === "" ? (
							<Route
								index
								element={<Buttons title="BUTTONS" />}
							/>
						) : practice === "practices" ? (
							<Route index element={<Basics title="BASICS" />} />
						) : null}
						<Route
							path="others"
							element={<Others title="OTHERS" />}
						/>
						<Route
							path="inputs"
							element={<Inputs title="INPUTS" />}
						/>

						<Route
							path="advances"
							element={<Advances title="ADVANCES" />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default Idea;
