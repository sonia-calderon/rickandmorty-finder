import { generatePath } from "react-router-dom";
import { switchRoutes } from "../router/routes";

interface SwitchRoutes {
	root: string;
	characters: string;
	detail: string;
}

interface Routes extends Omit<SwitchRoutes, "characters" | "detail"> {
	characters: (character: string) => string;
	detail: (id: number) => string;
}

export const routes: Routes = {
	...switchRoutes,
	characters: (character) =>
		generatePath(switchRoutes.characters, { character }),
	detail: (id) => generatePath(switchRoutes.detail, { id }),
};
