import { useEffect } from "react";
import Clock from "../../components/fundamentals/Clock";

const Home = () => {
	
	useEffect(() => {
		document.title = "Vale-React-Project";
	}, []);
	

	return <div id="main">
			<div className="container" style={{"height":"65vh"}} >
				<h1>Welcome to Vale-React-Project!</h1>
				<p>The current System time is:</p>
				<Clock />
			</div>		

		</div>;
};

export default Home;