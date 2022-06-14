import { useEffect, useState } from "react";
import PersonList from "../../components/api/person/model/PersonList";

const Register = () => {
	document.title = "Vale-React-Project: Person Register";

	useEffect(() => {
		console.log("rendered: " + document.title);
	}, []);

	const [number, setNumber] = useState(0);

	return <div id="main">
		<div className="container">
			<h2>Person Register page</h2>
			<br />
			<PersonList />
			<br />

			<p>Separate State Object:</p>
			<input type="number" value={number} onChange={(event)=>{setNumber(event.target.value)}}></input>
			<br />
		</div>
	</div>
};

export default Register;