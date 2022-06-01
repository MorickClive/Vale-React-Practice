import { Outlet, Link } from "react-router-dom";

const Menu = () => {

	const click = () => {
		window.scrollTo(0, 0);
	};

	return (<>
	<div style={{"width": "100%", "height": "auto", "position": "fixed", "top" : "0px"}}>
		<div id="nav">
			<div className="headerImage"></div>
			<h1>Vale-React-Project</h1>
		</div>
		<div id="menu">
			<Link to="/Home">		
				<input type="button" className="item" value="Home" onClick={click}/></Link>
			<Link to="/Home">		
				<input type="button" className="item" value="React Examples" onClick={click}/></Link>
			<Link to="/Register">
				<input type="button" className="item" value="Person Register" onClick={click}/></Link>
			<Link to="/NoteTracker">
				<input type="button" className="item" value="Note Tracker" onClick={click}/></Link>
			<Link to="/Javascript-Basics">
				<input type="button" className="item" value="JS Fundamentals" onClick={click}/></Link>
			<Link to="/Console">
				<input type="button" className="item" value="JS Console" onClick={click}/></Link>
			<Link to="/Calculator">
				<input type="button" className="item" value="JS Calculator" onClick={click}/></Link>
		</div>
	</div>
	<Outlet />
	</>
	);
};

export default Menu;