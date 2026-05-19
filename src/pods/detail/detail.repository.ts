import { CharacterDetailEntity } from "./detail.vm";
import { getCharacterDetail as getCharacterDetailApi } from "./api/detail.api";
import { mapCharacterFromApiToVm } from "./detail.mapper";

export const getCharacterDetail = (
	id: number,
): Promise<CharacterDetailEntity> => {
	return new Promise<CharacterDetailEntity>((resolve) => {
		getCharacterDetailApi(id).then((result) =>
			resolve(mapCharacterFromApiToVm(result)),
		);
	});
};
