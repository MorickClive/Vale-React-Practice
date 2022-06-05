import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Menu from "./pages/menu";
import Home from "./pages/main/home";
import Console from "./pages/main/console";
import Calculator from "./pages/main/calculator";
import Error404 from "./pages/error/errorNotFound";
import Register from "./pages/main/register";
import JSBasic from "./pages/main/jsfundamentals";
import NoteTracker from "./pages/main/notetracker";
import ReactPractice from "./pages/main/reactpractice";
import HookContext from "./components/hooks/hookContext";

function App() {
  const [value, setValue] = useState("Example Context");

  return (
    <div className="App">	
	
	<HookContext.Provider value={[value, setValue]} >
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Menu />}>
				<Route index element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="reactpractice" element={<ReactPractice />} />
				<Route path="register" element={<Register />} />
				<Route path="notetracker" element={<NoteTracker />} />
				<Route path="javascript-basics" element={<JSBasic />} />
				<Route path="console" element={<Console />} />
				<Route path="calculator" element={<Calculator />} />Calculator
				<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</HookContext.Provider>
	</div>
  );
}

export default App;
