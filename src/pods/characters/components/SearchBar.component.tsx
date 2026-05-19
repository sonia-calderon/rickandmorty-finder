import React from "react";
import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "12px",
	backgroundColor: "#1a1a2e",
	border: `2px solid #00D084`,
	transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
	"&:hover": {
		boxShadow:
			"0 0 15px rgba(0, 208, 132, 0.4), 0 0 30px rgba(0, 208, 132, 0.2)",
		borderColor: "#00FF84",
	},
	"&:focus-within": {
		boxShadow: "0 0 20px rgba(0, 208, 132, 0.6)",
		borderColor: "#00FF84",
	},
	width: "100%",
	[theme.breakpoints.down("sm")]: {
		marginBottom: theme.spacing(1),
	},
}));

const SearchIconWrapper = styled("button")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	left: "0.5rem",
	top: "50%",
	transform: "translateY(-50%)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	zIndex: 1,
	color: "#00D084",
	border: "none",
	backgroundColor: "transparent",
	cursor: "pointer",
	transition: "color 0.2s ease",
	"&:hover": {
		color: "#00FF84",
	},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#fff",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1.5, 1.5, 1.5, 0),
		paddingLeft: "3rem",
		paddingRight: "1rem",
		height: "45px",
		boxSizing: "border-box",
		transition: theme.transitions.create("width"),
		width: "100%",
		backgroundColor: "transparent",
		fontSize: "1rem",
		"&::placeholder": {
			color: "#00D084",
			opacity: 0.7,
		},
		"&:-webkit-autofill": {
			WebkitBoxShadow: `0 0 0 100px #1a1a2e inset`,
			WebkitTextFillColor: "#fff",
		},
	},
}));

interface Props {
	value: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
}

export const SearchBarComponent: React.FC<Props> = (props) => {
	const { value, onChange, onSubmit } = props;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (value.trim()) {
			onSubmit();
		}
	};

	const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (value.trim()) {
			onSubmit();
		}
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<Search>
				<SearchIconWrapper onClick={handleIconClick}>
					<SearchIcon sx={{ width: "1rem", height: "1rem" }} />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="Search for a character"
					inputProps={{
						"aria-label": "search",
						name: "search",
						id: "search",
						autoComplete: "off",
					}}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			</Search>
		</Box>
	);
};
