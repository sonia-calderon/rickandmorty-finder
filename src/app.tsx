import React from "react";
import { RouterComponent } from "@/core";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme";

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterComponent />
		</ThemeProvider>
	);
};
