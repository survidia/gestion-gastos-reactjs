import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../theme/colors";

const NavbarView = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/api/login");
	};
	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: colors.primary,
				height: 64, // altura fija
				overflow: "hidden", // evita que se deforme por el logo
			}}
		>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box
					component="img"
					src="/survidia.png"
					alt="Survidia Logo"
					sx={{
						height: 160,
						ml: 2,
					}}
				/>
				<Box>
					{token && (
						<Button component={Link} to="/api/inicio" sx={{ color: "#fff" }}>
							Gastos
						</Button>
					)}
					{token ? (
						<Button onClick={handleLogout} sx={{ color: "#fff" }}>
							Cerrar Sesión
						</Button>
					) : (
						<Button component={Link} to="/api/login" sx={{ color: "#fff" }}>
							Iniciar Sesión
						</Button>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarView;
