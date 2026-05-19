export interface CharacterDetailEntity {
	id: number;
	name: string;
	status: string;
	species: string;
	origin: CharacterDetailOrigin;
	image: string;
	type: string;
	location: CharacterDetailOrigin;
}

export interface CharacterDetailOrigin {
	name: string;
	url: string;
}
