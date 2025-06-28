import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
		host: "localhost", // Dirección del servidor
		port: 3000, // Puerto del servidor
		open: "/api", // Abre automáticamente en el navegador
		proxy: {
			"/gastos": {
				target: "http://localhost:8080",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/gastos/, "/api/gastos"),
			},
		},
	},
})
