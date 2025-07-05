import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

const LandingView = () => {
	return (
		<Box
			sx={{
				minHeight: "calc(100vh - 64px - 48px)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
				backgroundColor: colors.tertiary,
			}}
		>
			<Typography variant="h3" sx={{ color: colors.text }}>
				Bienvenido a Expense Manager
			</Typography>
			<Button
				component={Link}
				to="/api/login"
				variant="contained"
				color="primary"
			>
				Iniciar Sesión
			</Button>
		</Box>
	);
};

export default LandingView;
