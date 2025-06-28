import {
	Alert,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Snackbar,
	TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import API_ROUTES from "../config";
import { useEffect, useState } from "react";

const FormDialogUpdateExpenseManagement = ({
	open,
	onClose,
	onUpdate,
	expense,
}) => {
	const [updatedExpense, setUpdatedExpense] = useState(
		expense || {
			name: "",
			date: "",
			description: "",
			amount: "",
			category: "",
		}
	);
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("success");

	useEffect(() => {
		if (expense) {
			setUpdatedExpense(Array.isArray(expense) ? expense[0] : expense);
		}
	}, [expense]);

	const showAlert = (message, severity = "success") => {
		setAlertMessage(message);
		setAlertSeverity(severity);
		setAlertOpen(true);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdatedExpense((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { name, category, date, amount, description } = updatedExpense;

		if (!name || !category || !date || !amount || !description) {
			showAlert("Todos los campos son obligatorios", "error");
			return;
		}

		if (isNaN(amount) || Number(amount) <= 0) {
			showAlert("La cantidad debe ser un número positivo", "error");
			return;
		}

		try {
			const response = await fetch(
				API_ROUTES.UPDATE_EXPENSE(updatedExpense.idExpense),
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify(updatedExpense),
				}
			);

			if (response.ok) {
				const updatedData = await response.json();
				onUpdate(updatedData);
				showAlert("¡Gasto actualizado correctamente!", "success");
				onClose();
			} else {
				showAlert("Error al actualizar el gasto", "error");
			}
		} catch (error) {
			console.error("Error en la petición: ", error);
			showAlert("Error en la conexión", "error");
		}
	};

	const handleAlertClose = () => {
		setAlertOpen(false);
	};

	return (
		<div className="FormDialogUpdateExpenseManagement">
			<>
				<Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
					<DialogTitle>Actualizar gasto</DialogTitle>
					<DialogContent>
						<form onSubmit={handleSubmit}>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
								<TextField
									label="Nombre"
									name="name"
									type="text"
									value={updatedExpense.name}
									onChange={handleChange}
									slotProps={{
										inputLabel: {
											shrink: true,
										},
									}}
									fullWidth
									required
								/>
								<TextField
									label="Categoría"
									name="category"
									type="text"
									value={updatedExpense.category}
									onChange={handleChange}
									fullWidth
									required
								/>
								<TextField
									name="date"
									type="date"
									value={updatedExpense.date}
									onChange={handleChange}
									fullWidth
									required
								/>
								<TextField
									label="Cantidad"
									name="amount"
									type="number"
									value={updatedExpense.amount}
									onChange={handleChange}
									fullWidth
									required
								/>
								<TextField
									label="Descripción"
									name="description"
									type="text"
									value={updatedExpense.description}
									onChange={handleChange}
									fullWidth
									required
								/>
							</Box>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleSubmit}>Actualizar</Button>
						<Button onClick={onClose} color="error">
							Cancelar
						</Button>
					</DialogActions>
				</Dialog>

				<Snackbar
					open={alertOpen}
					autoHideDuration={3000}
					onClose={handleAlertClose}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
				>
					<Alert
						onClose={handleAlertClose}
						severity={alertSeverity}
						sx={{ width: "100%" }}
					>
						{alertMessage}
					</Alert>
				</Snackbar>
			</>
		</div>
	);
};

FormDialogUpdateExpenseManagement.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
	expense: PropTypes.object,
};

export default FormDialogUpdateExpenseManagement;
