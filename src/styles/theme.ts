import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#BFDE42",
		},
		secondary: {
			main: "#9E42DE",
		},
		background: {
			default: "#202329",
			paper: "#202329",
		},
		divider: "#202329",
	},
	typography: {
		fontFamily: ["system-ui"].join(","),
		h1: {
			fontSize: "24px",
			margin: 0,
		},
	},
});
