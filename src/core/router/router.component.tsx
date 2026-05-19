import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { CharactersPage, DetailPage } from "@/scenes";

export const RouterComponent: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path={switchRoutes.root} element={<CharactersPage />} />
				<Route path={switchRoutes.characters} element={<CharactersPage />} />
				<Route path={switchRoutes.detail} element={<DetailPage />} />
			</Routes>
		</Router>
	);
};
