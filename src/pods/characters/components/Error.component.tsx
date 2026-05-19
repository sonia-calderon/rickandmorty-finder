import React from "react";
import { Box, Alert } from "@mui/material";

interface Props {
	error?: string;
}

export const ErrorComponent: React.FC<Props> = (props) => {
	const { error } = props;
	return (
		<Box sx={{ width: "100%" }}>
			<Alert
				severity="error"
				sx={{
					backgroundColor: "rgba(255, 71, 87, 0.1)",
					border: "1px solid #FF4757",
					borderRadius: "8px",
					color: "#FF4757",
					fontWeight: 500,
				}}
			>
				{error}
			</Alert>
		</Box>
	);
};
