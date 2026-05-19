import React from "react";
import { CharacterEntity } from "./characters.vm";
import { Stack, Box, Fade } from "@mui/material";
import { SearchBarComponent } from "./components/SearchBar.component";
import { SearchResultsComponent } from "./components/SearchResults.component";
import { ErrorComponent } from "./components/Error.component";
import { PaginationComponent } from "./components/Pagination.component";
import { CharacterCardComponent } from "./components/CharacterCard.component";

interface Props {
	characters: CharacterEntity[];
	searchValue: string;
	onSearch: (value: string) => void;
	error?: string;
	initialPage?: number;
	initialCharacterId?: number;
}

export const CharactersComponent: React.FC<Props> = (props) => {
	const {
		characters,
		searchValue,
		onSearch,
		error,
		initialPage = 1,
		initialCharacterId,
	} = props;

	const [inputValue, setInputValue] = React.useState("");
	const [currentPage, setCurrentPage] = React.useState(initialPage);

	// Refs para manejar el scroll
	const characterRefs = React.useRef<Map<number, HTMLAnchorElement>>(new Map());
	const ignoreNextScrollRef = React.useRef(false);
	const isInitialMount = React.useRef(true);
	const hasRestoredScroll = React.useRef(false);
	const previousInitialPageRef = React.useRef(initialPage);

	// Configuración de paginación
	const itemsPerPage = 20;
	const totalPages = Math.ceil(characters.length / itemsPerPage);

	// Personajes paginados
	const paginatedCharacters = characters.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	// Efecto: Actualizar página cuando cambia initialPage (volver del detalle)
	React.useEffect(() => {
		if (initialPage !== previousInitialPageRef.current) {
			ignoreNextScrollRef.current = true;
			setCurrentPage(initialPage);
			hasRestoredScroll.current = false;
			previousInitialPageRef.current = initialPage;
		}
	}, [initialPage]);

	// Efecto: Restaurar scroll al volver del detalle
	React.useEffect(() => {
		if (
			!initialCharacterId ||
			characters.length === 0 ||
			hasRestoredScroll.current
		) {
			return;
		}

		const timeout = window.setTimeout(() => {
			const characterElement = characterRefs.current.get(initialCharacterId);

			if (characterElement) {
				characterElement.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
				hasRestoredScroll.current = true;
			}
		}, 100);

		return () => window.clearTimeout(timeout);
	}, [initialCharacterId, characters.length, currentPage]);

	// Efecto: Scroll al inicio al cambiar de página (excepto en la carga inicial o durante restauración)
	React.useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}

		if (ignoreNextScrollRef.current) {
			ignoreNextScrollRef.current = false;
			return;
		}

		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	// Handlers
	const onSubmit = () => {
		onSearch(inputValue.trim());
		setInputValue("");
		setCurrentPage(1);
	};

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	const handleCharacterClick = (characterId: number) => {
		// Guardar el estado actual en sessionStorage
		sessionStorage.setItem("listPage", currentPage.toString());
		sessionStorage.setItem("listCharacterId", characterId.toString());
	};

	const handleClearSearch = () => {
		onSearch("");
		setCurrentPage(1);
	};

	return (
		<Stack
			spacing={{ xs: 2, md: 4 }}
			sx={{
				width: "100%",
				maxWidth: 1080,
				mx: "auto",
				px: { xs: 1.5, sm: 2, md: 3 },
			}}
		>
			<SearchBarComponent
				value={inputValue}
				onChange={setInputValue}
				onSubmit={onSubmit}
			/>

			{searchValue && (
				<SearchResultsComponent
					searchValue={searchValue}
					onClearSearch={handleClearSearch}
				/>
			)}

			{error && <ErrorComponent error={error} />}

			{!error && (
				<Fade in={true} timeout={600}>
					<Box>
						<Box
							className="list"
							sx={{
								display: "grid",
								gridTemplateColumns: {
									xs: "1fr",
									sm: "repeat(2, 1fr)",
									md: "repeat(3, 1fr)",
									lg: "repeat(4, 1fr)",
								},
								gap: { xs: 2, sm: 2.5, md: 3 },
								width: "100%",
							}}
						>
							{paginatedCharacters.map((character) => (
								<CharacterCardComponent
									character={character}
									onCharacterClick={handleCharacterClick}
									cardRef={(el) => {
										if (el) {
											characterRefs.current.set(character.id, el);
										}
									}}
								/>
							))}
						</Box>
						<PaginationComponent
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					</Box>
				</Fade>
			)}
		</Stack>
	);
};
