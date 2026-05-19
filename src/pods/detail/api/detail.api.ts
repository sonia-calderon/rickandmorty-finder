import { CharacterDetailEntityApi } from "./detail.api-model";

export const getCharacterDetail = (
	id: number,
): Promise<CharacterDetailEntityApi> => {
	return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
		(response) => response.json(),
	);
};
