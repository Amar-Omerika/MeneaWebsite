/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Index";

function GlobalRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default GlobalRoutes;
