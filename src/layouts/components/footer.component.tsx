import React from "react";
import { Box, Typography, Link } from "@mui/material";

export const Footer: React.FC = () => {
	return (
		<Box
			component="footer"
			sx={{
				width: "100%",
				textAlign: "center",
				padding: 2,
			}}
		>
			<Typography variant="body2" component="span">
				&#10047; Coded by{" "}
				<Link
					href="https://github.com/sonia-calderon"
					target="_blank"
					rel="noopener noreferrer"
					color="primary"
					underline="hover"
				>
					Sonia Calderón
				</Link>
			</Typography>
		</Box>
	);
};
