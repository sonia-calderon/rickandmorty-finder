import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const ClearSearchButton = styled("button")(({ theme }) => ({
	textTransform: "none",
	fontSize: "0.95rem",
	fontWeight: 600,
	backgroundColor: "transparent",
	color: "#00D084",
	padding: "8px 16px",
	borderRadius: "6px",
	border: "2px solid #00D084",
	cursor: "pointer",
	transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
	display: "flex",
	alignItems: "center",
	gap: "6px",
	"&:hover": {
		backgroundColor: "#00D084",
		color: "#1a1a2e",
		transform: "translateY(-2px)",
		boxShadow: "0 4px 12px rgba(0, 208, 132, 0.3)",
	},
	"&:active": {
		transform: "translateY(0)",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.85rem",
		padding: "6px 12px",
	},
}));

interface Props {
	searchValue: string;
	onClearSearch: () => void;
}

export const SearchResultsComponent: React.FC<Props> = (props) => {
	const { searchValue, onClearSearch } = props;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				justifyContent: "space-between",
				alignItems: { xs: "flex-start", sm: "center" },
				gap: 2,
			}}
		>
			<Box>
				<Typography
					variant="h3"
					component="h3"
					sx={{
						fontSize: { xs: "1.5rem", sm: "2rem", md: "32px" },
						textTransform: "lowercase",
						"&::first-letter": {
							textTransform: "uppercase",
						},
					}}
				>
					Results for "{searchValue}"
				</Typography>
			</Box>
			<ClearSearchButton onClick={onClearSearch}>
				<ClearIcon sx={{ fontSize: "1.1rem" }} />
				Show All Characters
			</ClearSearchButton>
		</Box>
	);
};
