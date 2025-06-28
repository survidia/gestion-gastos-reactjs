import { Box, Typography } from "@mui/material";
import { colors } from "../theme/colors";

const FooterView = () => {
	return (
		<Box
			component="footer"
			sx={{
				position: "fixed", // Se mantiene fijo en la parte inferior
				bottom: 0,
				left: 0,
				width: "100%",
				backgroundColor: colors.primary,
				color: colors.text,
				textAlign: "center",
				padding: "10px 0",
			}}
		>
			<Typography variant="body2">
				{"\u00A9"} {new Date().getFullYear()} Survidia. Todos los derechos
				reservados.
			</Typography>
		</Box>
	);
};

export default FooterView;
