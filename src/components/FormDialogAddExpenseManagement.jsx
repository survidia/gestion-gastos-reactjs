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
import { useState } from "react";

const FormDialogAddExpenseManagement = ({ open, onClose, onCreate }) => {
	const [expense, setExpense] = useState({
		name: "",
		date: "",
		description: "",
		amount: "",
		category: "",
	});
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("success");

	const showAlert = (message, severity = "success") => {
		setAlertMessage(message);
		setAlertSeverity(severity);
		setAlertOpen(true);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setExpense({
			...expense,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(API_ROUTES.CREATE_EXPENSE, {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
				body: JSON.stringify({
					...expense,
				}),
			});

			if (response.ok) {
				const newExpense = await response.json();
				onCreate(newExpense);

				// Reinicia los campos
				setExpense({
					name: "",
					date: "",
					description: "",
					amount: "",
					category: "",
				});
				showAlert("¡Registro creado correctamente!", "success");
				onClose();
			} else {
				console.error(
					"Error al crear al registro debido a: ",
					response.statusText
				);
				showAlert("Error al crear el registro", "error");
			}
		} catch (error) {
			console.error("Error en la petición: ", error);
			showAlert("Error en la petición", "error");
		}
	};

	const handleAlertClose = () => {
		setAlertOpen(false);
	};

	return (
		<div className="FormDialogAddExpenseManagement">
			<>
				<Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
					<DialogTitle>Nuevo Gasto</DialogTitle>
					<DialogContent>
						<form onSubmit={handleSubmit}>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
								<TextField
									label="Nombre"
									name="name"
									type="text"
									value={expense.name}
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
									value={expense.category}
									onChange={handleChange}
									fullWidth
									required
								/>
								<TextField
									name="date"
									type="date"
									value={expense.date}
									onChange={handleChange}
									fullWidth									
									required
								/>
								<TextField
									label="Cantidad"
									name="amount"
									type="number"
									value={expense.amount}
									onChange={handleChange}
									fullWidth
									required
								/>
								<TextField
									label="Descripción"
									name="description"
									type="text"
									value={expense.description}
									onChange={handleChange}
									fullWidth
									required
								/>																
							</Box>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								sx={{ mt: 2 }}
							>
								Crear gasto
							</Button>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleSubmit}>Guardar</Button>
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

FormDialogAddExpenseManagement.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onCreate: PropTypes.func.isRequired,
};

export default FormDialogAddExpenseManagement;
