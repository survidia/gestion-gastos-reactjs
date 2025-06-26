import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const VITE_APP_URL = import.meta.env.VITE_APP_URL;

export default defineConfig({
	plugins: [react()],
	server: {
		host: "localhost", // Dirección del servidor
		port: 3000, // Puerto del servidor
		open: "/gastos", // Abre automáticamente en el navegador
		proxy: {
			"/gastos": {
				target: "http://localhost:8080",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/gastos/, "/gastos"),
			},
		},
	},
});
