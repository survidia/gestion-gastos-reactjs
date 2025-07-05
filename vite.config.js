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
			"/inicio": {
				target: "http://localhost:8080",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/inicio/, "/api/inicio"),
			},
			"/login": {
				target: "http://localhost:8081",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/login/, "/api/login"),
			},
		},
	},
})
