import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import contactImg from "../../../assets/contact.png";
// thư viện hỗ trợ việc cuộn trang / #run: npm i react-scroll
import { Link } from "react-scroll";
import menu from "../../../assets/menu.png";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="navbar">
			<img src={logo} alt="logo" className="logo" />
			<div className="desktopMenu">
				<Link
					activeClass="active"
					to="intro"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="desktopMenuListItem"
				>
					Home
				</Link>
				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="desktopMenuListItem"
				>
					About
				</Link>
				<Link
					activeClass="active"
					to="works"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="desktopMenuListItem"
				>
					Portfolio
				</Link>
				<Link
					activeClass="active"
					to="clients"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="desktopMenuListItem"
				>
					Clients
				</Link>
			</div>
			<button
				className="desktopMenuBtn"
				onClick={() => {
					document
						.getElementById("contacts")
						.scrollIntoView({ behavior: "smooth" });
				}}
			>
				<img src={contactImg} alt="" className="desktopMenuImg" />
				Contact Me
			</button>

			{/* --------------------- */}
			<img
				src={menu}
				alt="Menu"
				className="mobMenu"
				onClick={() => setShowMenu(!showMenu)}
			/>
			<div
				className="navMenu"
				style={{ display: showMenu ? "flex" : "none" }}
			>
				<Link
					activeClass="active"
					to="intro"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="listItem"
					onClick={() => setShowMenu(false)}
				>
					Home
				</Link>
				<Link
					activeClass="active"
					to="skills"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="listItem"
					onClick={() => setShowMenu(false)}
				>
					About
				</Link>
				<Link
					activeClass="active"
					to="works"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="listItem"
					onClick={() => setShowMenu(false)}
				>
					Portfolio
				</Link>
				<Link
					activeClass="active"
					to="clients"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="listItem"
					onClick={() => setShowMenu(false)}
				>
					Clients
				</Link>
				<Link
					activeClass="active"
					to="contacts"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="listItem"
					onClick={() => setShowMenu(false)}
				>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
