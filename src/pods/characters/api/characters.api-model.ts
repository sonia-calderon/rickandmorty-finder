export interface CharacterEntityApi {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Origin;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export interface Origin {
	name: string;
	url: string;
}

export interface Location {
	name: string;
	url: string;
}

export interface ApiPaginationInfo {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface CharacterApiResponse {
	info: ApiPaginationInfo;
	results: CharacterEntityApi[];
}
