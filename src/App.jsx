import "./App.css";
import { Route, Routes } from "react-router-dom";
import FooterView from "./pages/FooterView";
import HomeView from "./pages/HomeView";
import NavbarView from "./pages/NavbarView";
import LoginView from "./pages/LoginView";
import LandingView from "./pages/LandingView";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<>
			<NavbarView />
			<Routes>
				<Route path="/" element={<LandingView />} />
				<Route path="/api/login" element={<LoginView />} />
				<Route element={<PrivateRoute />}>
					<Route path="/api/inicio" element={<HomeView />} />
				</Route>
			</Routes>
			<FooterView />
		</>
	);
}

export default App;
