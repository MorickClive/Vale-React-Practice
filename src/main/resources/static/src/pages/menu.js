import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
	<div id="menu">
		<Link to="/Home"><input type="button" className="item" value="React Examples" /></Link>
		<Link to="/Register"><input type="button" className="item" value="Person Register" /></Link>
		<Link to="/NoteTracker"><input type="button" className="item" value="Note Tracker" /></Link>
		<Link to="/Javascript-Basics"><input type="button" className="item" value="JS Fundamentals" /></Link>
		<Link to="/Console"><input type="button" className="item" value="JS Console" /></Link>
		<Link to="/Calculator"><input type="button" className="item" value="JS Calculator" /></Link>
	</div>
	<Outlet />
	</>
	);
};

export default Menu;