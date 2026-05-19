import * as vm from "./detail.vm";
import * as api from "./api/detail.api-model";

export const mapCharacterFromApiToVm = (
	character: api.CharacterDetailEntityApi,
): vm.CharacterDetailEntity => ({
	id: character.id,
	name: character.name,
	status: character.status,
	species: character.species,
	origin: {
		name: character.origin.name,
		url: character.origin.url,
	},
	image: character.image,
	type: character.type,
	location: {
		name: character.origin.name,
		url: character.origin.url,
	},
});
