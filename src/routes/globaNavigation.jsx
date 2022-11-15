/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Index";
import Sublinks from "../components/Sublinks/Index";
import NewsPage from "../components/NewsPage/Index";
import Links from "../components/Links/Index";

function GlobalRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:element/:id" element={<Sublinks />} />
			<Route path="/news/:article" element={<NewsPage />} />
			<Route path="/:link" element={<Links />} />
		</Routes>
	);
}

export default GlobalRoutes;
