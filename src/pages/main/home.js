import { getValue } from "@testing-library/user-event/dist/utils";
import { useContext, useEffect } from "react";
import Clock from "../../components/fundamentals/Clock";
import HookContext from "../../components/hooks/hookContext";

const Home = () => {
	
	document.title = "Vale-React-Project";
	useEffect(() => {
		console.log("rendered: " + document.title);
	}, []);

	const [value, setValue] = useContext(HookContext);
	
	return <div id="main">
			<div className="container" style={{"height":"65vh"}} >
				<h1>Welcome to Vale-React-Project!</h1>
				<br />
				<p>useContext: [{value}]</p>
				<br />
				<p>The current System time is:</p>
				<Clock />
			</div>		

		</div>;
};

export default Home;