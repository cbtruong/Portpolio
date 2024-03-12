import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const LeftMenu = ({ menu, ideaTitle, setIdeaTitle}) => {
	console.log(menu);
	return (
		<div className="ideaMenus">
			<a href="/">
				<img src={logo} alt="logo" className="logo" />
			</a>
			<div className="ideaMenu">
				{menu.map((item, index) => (
					<Link
						key={index}
						to={item.childSkill}
						className="ideaTitle"
						style={{
							background:
								ideaTitle === index
									? "rgb(41, 41, 41)"
									: "black",
						}}
						onClick={() => setIdeaTitle(index)}
					>
						{item.Title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default LeftMenu;
