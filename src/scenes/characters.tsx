import React from "react";
import { AppLayout } from "@/layouts";
import { CharactersContainer } from "@/pods/characters";

export const CharactersPage: React.FC = () => {
	return (
		<AppLayout>
			<CharactersContainer />
		</AppLayout>
	);
};
