import "./App.css";
import { Route, Routes } from "react-router-dom";
import FooterView from "./pages/FooterView";
import HomeView from "./pages/HomeView";
import NavbarView from "./pages/NavbarView";

function App() {
	return (
		<>
			<NavbarView />
			<Routes>
				<Route path="/api/" element={<HomeView />} />
			</Routes>
			<FooterView />
		</>
	);
}

export default App;
