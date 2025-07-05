const API_APP_URL = import.meta.env.VITE_APP_URL;

// ¡IMPORTANTE LEER!
// Hacer búsqueda masiva si se va a cambiar las rutas por si estuvieran en otros sitios
export const API_ROUTES = {
	GET_ALL_EXPENSES: `${API_APP_URL}/inicio/todos`,
	CREATE_EXPENSE: `${API_APP_URL}/inicio/crear`,
	UPDATE_EXPENSE: (idExpense) =>
		`${API_APP_URL}/inicio/actualizar/${idExpense}`,
	DELETE_EXPENSE: (idExpense) => `${API_APP_URL}/inicio/eliminar/${idExpense}`,

	LOGIN: `${API_APP_URL}/login`,
};

export default API_ROUTES;
