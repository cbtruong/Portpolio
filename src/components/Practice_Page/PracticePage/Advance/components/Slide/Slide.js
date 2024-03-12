import React, { useEffect, useRef } from "react";
import "./Slide.css";

import backBtn from "./images/back.png";
import nextBtn from "./images/next.png";
import image1 from "./images/image-1.png";
import image2 from "./images/image-2.png";
import image3 from "./images/image-3.png";
import image4 from "./images/image-4.png";
import image5 from "./images/image-5.png";
import image6 from "./images/image-6.png";

const Slide = () => {
	const scrollContainerRef = useRef(null);
	

	const handleScroll = (evt) => {
		evt.preventDefault();
		evt.stopImmediatePropagation();
		const scrollAmount = evt.deltaY;
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.scrollLeft += scrollAmount;
			scrollContainer.style.scrollBehavior = "auto";
		}
	};

	const handleNextClick = () => {
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.style.scrollBehavior = "smooth";
			scrollContainer.scrollLeft += 900;
		}
	};

	const handleBackClick = () => {
		const scrollContainer = scrollContainerRef.current;
		if (scrollContainer) {
			scrollContainer.style.scrollBehavior = "smooth";
			scrollContainer.scrollLeft -= 900;
		}
	};

	return (
		<div className="gallery-wrap">
			<img src={backBtn} id="backBtn" alt="" onClick={handleBackClick} />
			<div
				className="gallery"
				onWheel={handleScroll}
				ref={scrollContainerRef}
			>
				<div>
					<span>
						<img src={image1} alt="" />
					</span>
					<span>
						<img src={image2} alt="" />
					</span>
					<span>
						<img src={image3} alt="" />
					</span>
				</div>
				<div>
					<span>
						<img src={image4} alt="" />
					</span>
					<span>
						<img src={image5} alt="" />
					</span>
					<span>
						<img src={image6} alt="" />
					</span>
				</div>
			</div>
			<img src={nextBtn} id="nextBtn" alt="" onClick={handleNextClick} />
		</div>
	);
};

export default Slide;
