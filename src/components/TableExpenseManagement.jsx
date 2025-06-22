import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { colors } from "../theme/colors";

const TableExpenseManagement = () => {
	return (
		<div className="ExpenseManagementTable">
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Fecha
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Descripción
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Monto
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Categoría
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Acciones
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody sx={{ backgroundColor: colors.tertiary }}>
						<TableRow>
							<TableCell sx={{ color: colors.text }}>01/01/2023</TableCell>
							<TableCell sx={{ color: colors.text }}>
								Compra de suministros
							</TableCell>
							<TableCell sx={{ color: colors.text }}>$100.00</TableCell>
							<TableCell sx={{ color: colors.text }}>Suministros</TableCell>
							<TableCell sx={{ color: colors.text }}>
								Editar | Eliminar
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableExpenseManagement;
