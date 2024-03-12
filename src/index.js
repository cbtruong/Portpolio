import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import Idea from "./Pages/Idea.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/idea/:practice/*" element={<Idea />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
