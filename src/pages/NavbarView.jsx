import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

const NavbarView = () => {
	return (
		<AppBar position="sticky" sx={{ backgroundColor: colors.primary }}>
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					<Button component={Link} to="/" color="inherit">
						Survidia
					</Button>
				</Typography>
				<Box>
					<Button component={Link} to="/" color="inherit">
						Gastos
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarView;
