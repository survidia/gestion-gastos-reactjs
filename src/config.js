const API_APP_URL = import.meta.env.VITE_APP_URL;

// ¡IMPORTANTE LEER!
// Hacer búsqueda masiva si se va a cambiar las rutas por si estuvieran en otros sitios
export const API_ROUTES = {
	GET_ALL_EXPENSES: `${API_APP_URL}/gastos/todos`,
	CREATE_EXPENSE: `${API_APP_URL}/gastos/crear`,
	UPDATE_EXPENSE: (idExpense) =>
		`${API_APP_URL}/gastos/actualizar/${idExpense}`,
	DELETE_ROUTINE: (idExpense) => `${API_APP_URL}/gastos/borrar/${idExpense}`,
};

export default API_ROUTES;
