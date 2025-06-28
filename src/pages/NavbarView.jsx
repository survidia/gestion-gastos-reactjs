import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

const NavbarView = () => {
	return (
		<AppBar position="sticky" sx={{ backgroundColor: colors.primary }}>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant="h6" color="inherit">
					<Button component={Link} to="/api" sx={{ color: "#fff" }}>
						Survidia
					</Button>
				</Typography>
				<Box>
					<Button component={Link} to="/api" sx={{ color: "#fff" }}>
						Gastos
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarView;
