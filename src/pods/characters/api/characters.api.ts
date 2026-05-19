import {
	CharacterEntityApi,
	CharacterApiResponse,
} from "./characters.api-model";

export const getCharactersCollection = async (
	character: string,
): Promise<CharacterEntityApi[]> => {
	let allCharacters: CharacterEntityApi[] = [];
	let page = 1;
	const maxPages = 10;

	while (page <= maxPages) {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character/?name=${character}&page=${page}`,
		);

		if (!response.ok) {
			throw new Error(`Character "${character}" not found`);
		}

		const data: CharacterApiResponse = await response.json();

		allCharacters = [...allCharacters, ...data.results];

		if (!data.info.next) {
			break;
		}

		page++;
	}

	return allCharacters;
};

export const getAllCharacters = async (): Promise<CharacterEntityApi[]> => {
	let allCharacters: CharacterEntityApi[] = [];
	let page = 1;
	const maxPages = 10;

	while (page <= maxPages) {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character/?page=${page}`,
		);

		if (!response.ok) {
			throw new Error("Failed to fetch characters");
		}

		const data: CharacterApiResponse = await response.json();

		allCharacters = [...allCharacters, ...data.results];

		if (!data.info.next) {
			break;
		}

		page++;
	}

	return allCharacters;
};
