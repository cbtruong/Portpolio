import React from "react";
import "./Quizziz.css";

const Quizziz = () => {
    const questions = [
        {
            question: "Which device is required for the Internet connection?",
            answers: [
                { text: "Kalahari", correct: false },
                { text: "Kalahari", correct: false },
                { text: "Kalahari", correct: false },
                { text: "Kalahari", correct: true },
            ],
        },
        {
            question: "Which device is required for the Internet connection?",
            answers: [
                { text: "Kalahari", correct: false },
                { text: "Kalahari", correct: false },
                { text: "Kalahari", correct: false },
                { text: "Kalahari", correct: true },
            ],
        },
    ];
	return (
		<div className="main">
			<div className="app">
				<h1>Simple Quiz</h1>
				<div className="quiz">
					<h2 id="question">Question goes here</h2>
					<div id="answer-buttons">
						<button className="btn">Answer 1</button>
						<button className="btn">Answer 2</button>
						<button className="btn">Answer 3</button>
						<button className="btn">Answer 4</button>
					</div>
					<button id="next-btn">Next</button>
				</div>
			</div>
		</div>
	);
};

export default Quizziz;
