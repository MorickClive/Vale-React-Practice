import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu";
import Home from "./pages/main/home";
import Console from "./pages/main/console";
import Calculator from "./pages/main/calculator";
import Error404 from "./pages/error/errorNotFound";
import './resources/css/main.css';
import Register from "./pages/main/register";
import JSBasic from "./pages/main/jsfundamentals";
import NoteTracker from "./pages/main/notetracker";

function App() {
  //document.title = "Vale-React-Project";

  return (
    <div className="App">
		<div id="nav">
			<div className="headerImage"></div>
			<h1>Vale-React-Project</h1>
		</div>
		
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Menu />}>
				<Route index element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="register" element={<Register />} />
				<Route path="notetracker" element={<NoteTracker />} />
				<Route path="javascript-basics" element={<JSBasic />} />
				<Route path="console" element={<Console />} />
				<Route path="calculator" element={<Calculator />} />Calculator
				<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
		
    </div>
  );
}

export default App;
