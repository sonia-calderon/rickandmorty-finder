import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
	plugins: [tsconfigPaths(), checker({ typescript: true }), react()],
	resolve: {
		alias: {
			core: path.resolve(__dirname, "./src/core"),
		},
	},
});
