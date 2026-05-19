export interface CharacterEntity {
	id: number;
	name: string;
	status: string;
	species: string;
	origin: Origin;
	image: string;
}

export interface Origin {
	name: string;
	url: string;
}
