import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

const NavbarView = () => {
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
					<Button component={Link} to="/api/inicio" sx={{ color: "#fff" }}>
						Gastos
					</Button>
					<Button component={Link} to="/api/login" sx={{ color: "#fff" }}>
						Iniciar Sesión
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarView;
