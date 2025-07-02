import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_ROUTES from "../config";
import { colors } from "../theme/colors";

const LoginView = () => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(API_ROUTES.LOGIN, {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
				body: JSON.stringify(credentials),
			});
			if (response.ok) {
				const data = await response.json();
				localStorage.setItem("token", data.token);
				navigate("/api/inicio");
			} else {
				setError("Credenciales inválidas");
			}
		} catch (error) {
			setError("Error en la petición:", error);
		}
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}
		>
			<Typography variant="h5" textAlign="center" sx={{ color: colors.text }}>
				Iniciar Sesión
			</Typography>
			<TextField
				label="Usuario"
				name="username"
				value={credentials.username}
				onChange={handleChange}
				required
				sx={{ backgroundColor: colors.textField, label: { color: colors.text } }}
			/>
			<TextField
				label="Contraseña"
				name="password"
				type="password"
				value={credentials.password}
				onChange={handleChange}
				required
                sx={{ backgroundColor: colors.textField, label: { color: colors.text } }}
			/>
			{error && <Alert severity="error">{error}</Alert>}
			<Button type="submit" variant="contained">
				Entrar
			</Button>
		</Box>
	);
};

export default LoginView;
