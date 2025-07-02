import "./App.css";
import { Route, Routes } from "react-router-dom";
import FooterView from "./pages/FooterView";
import HomeView from "./pages/HomeView";
import NavbarView from "./pages/NavbarView";
import LoginView from "./pages/LoginView";

function App() {
	return (
		<>
			<NavbarView />
			<Routes>
				<Route path="/api/inicio" element={<HomeView />} />
				<Route path="/api/login" element={<LoginView />} />
			</Routes>
			<FooterView />
		</>
	);
}

export default App;
