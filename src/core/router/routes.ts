import { generatePath } from "react-router-dom";

interface SwitchRoutes {
	root: string;
	characters: string;
	detail: string;
}

export const switchRoutes: SwitchRoutes = {
	root: "/",
	characters: "/:character",
	detail: "/character/:id",
};
