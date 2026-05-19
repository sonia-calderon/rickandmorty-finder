import { CharacterEntity } from "./characters.vm";
import {
	getCharactersCollection as getCharactersCollectionApi,
	getAllCharacters as getAllCharactersApi,
} from "./api/characters.api";
import { mapCharacterCollectionFromApiToVm } from "./characters.mapper";

export const getCharacterCollection = async (
	character: string,
): Promise<CharacterEntity[]> => {
	const result = await getCharactersCollectionApi(character);
	return mapCharacterCollectionFromApiToVm(result);
};

export const getAllCharacterCollection = async (): Promise<
	CharacterEntity[]
> => {
	const result = await getAllCharactersApi();
	return mapCharacterCollectionFromApiToVm(result);
};
