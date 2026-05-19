import * as vm from "./characters.vm";
import * as api from "./api/characters.api-model";

export const mapCharacterFromApiToVm = (
	character: api.CharacterEntityApi,
): vm.CharacterEntity => ({
	id: character.id,
	name: character.name,
	status: character.status,
	species: character.species,
	origin: character.origin,
	image: character.image,
});

export const mapCharacterCollectionFromApiToVm = (
	characterCollection: api.CharacterEntityApi[],
): vm.CharacterEntity[] => {
	return characterCollection.map((character) =>
		mapCharacterFromApiToVm(character),
	);
};
