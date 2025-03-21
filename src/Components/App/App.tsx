import { Route, Routes } from "react-router";
import GlyphUsers from "../Glyphs/Glyphs";
import Header from "../Header/Header";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route index element={<GlyphUsers />} />
			</Routes>
		</>
	);
};

export default App;
