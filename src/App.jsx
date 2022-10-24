import React from "react";
import GlobalRoutes from "./routes/globaNavigation";
import { BrowserRouter } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalRoutes />
		</BrowserRouter>
	);
}
