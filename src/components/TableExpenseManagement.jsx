import {
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import API_ROUTES from "../config";
import { colors } from "../theme/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FormDialogAddExpenseManagement from "./FormDialogAddExpenseManagement";
import FormDialogUpdateExpenseManagement from "./FormDialogUpdateExpenseManagement";
import { useEffect, useState } from "react";

const TableExpenseManagement = () => {
	const [expenses, setExpenses] = useState([]);
	const [openFormDialogAddExpense, setOpenFormDialogAddExpense] =
		useState(false);
	const [openFormDialogUpdateExpense, setOpenFormDialogUpdateExpense] =
		useState(false);
	const [selectedExpense, setSelectedExpense] = useState(null);

	const fetchExpenses = async () => {
		try {
			const response = await fetch(API_ROUTES.GET_ALL_EXPENSES);
			if (response.ok) {
				const data = await response.json();
				console.log(data)
				setExpenses(data);
			} else {
				console.error("Error al obtener los gastos:", response.statusText);
			}
		} catch (error) {
			console.error("Error en la petición:", error);
		}
	};

	useEffect(() => {
		fetchExpenses();
	}, []);

	const handleDelete = (idExpense) => {
		fetch(API_ROUTES.DELETE_EXPENSE(idExpense), {
			method: "DELETE",
		})
			.then((response) => {
				if (response.ok) {
					setExpenses((prev) =>
						prev.filter((expenses) => expenses.idExpense !== idExpense)
					);
					console.log("Gasto eliminado correctamente");
				} else {
					console.error("Error al eliminar el gasto");
				}
			})
			.catch((error) => console.error("Error en la petición:", error));
	};

	const handleUpdate = (updatedExpense) => {
		setExpenses((prevExpenses) =>
			prevExpenses.map((expense) =>
				expense.idExpense === updatedExpense.idExpense
					? updatedExpense
					: expense
			)
		);
		setOpenFormDialogUpdateExpense(false);
	};

	return (
		<div className="TableExpenseManagement">
			<FormDialogAddExpenseManagement
				open={openFormDialogAddExpense}
				onClose={() => setOpenFormDialogAddExpense(false)}
				onCreate={(newExpense) => {
					setExpenses((prev) => [...prev, newExpense]);
					setOpenFormDialogAddExpense(false);
				}}
			/>

			<FormDialogUpdateExpenseManagement
				open={openFormDialogUpdateExpense}
				onClose={() => setOpenFormDialogUpdateExpense(false)}
				onUpdate={handleUpdate}
				expense={selectedExpense}
			/>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Nombre
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Categoría
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Fecha
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Cantidad
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Descripción
							</TableCell>
							<TableCell
								sx={{ backgroundColor: colors.secondary, color: colors.text }}
							>
								Acciones
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody sx={{ backgroundColor: colors.tertiary }}>
						{expenses.map((expense) => (
							<TableRow key={expense.idExpense}>
								<TableCell sx={{ color: colors.text }}>
									{expense.name}
								</TableCell>
								<TableCell sx={{ color: colors.text }}>
									{expense.category}
								</TableCell>
								<TableCell sx={{ color: colors.text }}>
									{expense.date}
								</TableCell>
								<TableCell sx={{ color: colors.text }}>
									{expense.amount}
								</TableCell>
								<TableCell sx={{ color: colors.text }}>
									{expense.description}
								</TableCell>
								<TableCell sx={{ color: colors.text }}>
									<IconButton
										sx={{ color: colors.edit }}
										onClick={() => {
											setSelectedExpense(expense);
											setOpenFormDialogUpdateExpense(true);
										}}
									>
										<EditIcon />
									</IconButton>
									<IconButton
										sx={{ color: colors.trash }}
										onClick={() => handleDelete(expense.idExpense)}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell align="center" colSpan={9}>
								<IconButton
									onClick={() => setOpenFormDialogAddExpense(true)}
									sx={{ color: colors.add, width: "100%" }}
								>
									<AddIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableExpenseManagement;
