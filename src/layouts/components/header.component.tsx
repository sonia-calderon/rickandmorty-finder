import React from "react";
import logo from "../../assets/rick_and_morty_logo.svg";
import { Box } from "@mui/material";

export const Header: React.FC = () => {
	return (
		<Box
			component="header"
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				py: 3,
				px: { xs: 1.5, sm: 2, md: 3 },
			}}
		>
			<img src={logo} width={300} alt="Rick and Morty" />
		</Box>
	);
};
