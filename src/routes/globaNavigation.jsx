/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Index";
import Sublinks from "../components/Sublinks/Index";

function GlobalRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:element/:id" element={<Sublinks />} />
		</Routes>
	);
}

export default GlobalRoutes;
