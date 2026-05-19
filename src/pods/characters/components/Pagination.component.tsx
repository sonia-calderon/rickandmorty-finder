import React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PaginationButton = styled("button")<{ active?: boolean }>(
	({ theme, active }) => ({
		padding: theme.spacing(1, 2),
		border: "none",
		borderRadius: "4px",
		backgroundColor: active ? "#00D084" : "transparent",
		color: active ? "#1a1a2e" : "#00D084",
		cursor: "pointer",
		transition: "all 0.2s ease",
		fontWeight: active ? "bold" : "normal",
		minWidth: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "4px",
		fontSize: "0.95rem",

		"&:hover:not(:disabled)": {
			backgroundColor: active ? "#00D084" : "rgba(0, 208, 132, 0.1)",
			transform: "translateY(-2px)",
		},
		"&:disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	}),
);

const PaginationEllipsis = styled(Box)(({ theme }) => ({
	padding: theme.spacing(1, 2),
	minWidth: "40px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "0.95rem",
	color: theme.palette.common.white,
	[theme.breakpoints.down("sm")]: {
		padding: theme.spacing(0.75, 1.5),
		minWidth: "32px",
		fontSize: "0.8rem",
	},
}));

interface Props {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<Props> = (props) => {
	const { currentPage, totalPages, onPageChange } = props;

	const getVisiblePages = (currentPage: number, totalPages: number) => {
		const pages: (number | string)[] = [];
		if (totalPages <= 6) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			// Siempre incluir 1
			pages.push(1);
			// Si currentPage > 4, añadir ... después de 1
			if (currentPage > 4) pages.push("...");
			// Añadir páginas alrededor de currentPage
			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);
			for (let i = start; i <= end; i++) {
				if (!pages.includes(i)) pages.push(i);
			}
			// Si currentPage < totalPages - 3, añadir ... antes de totalPages
			if (currentPage < totalPages - 3) pages.push("...");
			// Siempre incluir totalPages si no está ya
			if (!pages.includes(totalPages)) pages.push(totalPages);
		}
		return pages;
	};

	return (
		<Stack
			direction="row"
			spacing={1}
			sx={{
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				mt: { xs: 4, md: 5 },
				width: "100%",
			}}
		>
			<PaginationButton
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				aria-label="Previous page"
			>
				<ChevronLeftIcon sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} />
				<Box sx={{ display: { xs: "none", sm: "inline" } }}>Previous</Box>
			</PaginationButton>

			{getVisiblePages(currentPage, totalPages).map((page, index) =>
				typeof page === "number" ? (
					<PaginationButton
						key={page}
						onClick={() => onPageChange(page)}
						active={currentPage === page}
						aria-label={`Page ${page}`}
						aria-current={currentPage === page ? "page" : undefined}
					>
						{page}
					</PaginationButton>
				) : (
					<PaginationEllipsis key={`ellipsis-${index}`}>...</PaginationEllipsis>
				),
			)}

			<PaginationButton
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages || totalPages === 0}
				aria-label="Next page"
			>
				<Box sx={{ display: { xs: "none", sm: "inline" } }}>Next</Box>
				<ChevronRightIcon sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} />
			</PaginationButton>
		</Stack>
	);
};
