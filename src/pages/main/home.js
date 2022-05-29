import { useState } from "react";
import renderExample from "../../components/fundamentals/renderExample";
import exampleComp from "../../components/fundamentals/exampleComponent";
import TaskList from "../../components/fundamentals/models/TaskList";
import Clock from "../../components/fundamentals/Clock";
import NameForm from "../../components/fundamentals/NameForm";

const Home = () => {
	// React Render
	renderExample();

	//jsx expressions
	const message = "Hello World";

	const exampleComponent = exampleComp();

	// List.key
	// eslint-disable-next-line
	const [tasks, setTaskList] = useState([
		{
			id: 0,
			label: 'Example header',
			message: 'Example message'
		},
		{
			id: 1,
			label: 'Example Item',
			message: 'Example message'
		},
		{
			id: 2,
			label: 'Example Item',
			message: 'Example message'
		}
	]);

	const alertBtn = () => {
		alert("Message Trigger");	
	};

	/* 
		TASK LIST:
			- Forms
	*/

	return <div id="main">
			<div className="container">
				<h1>{message}</h1>
				{<p>This message is generated through inline Javascript XML!</p>}
			</div>		

			<div className="container">
				<h3>Example Component:</h3>
				<>{exampleComponent}</>
			</div>
			
			<div className="container">
				<h3>Example Events:</h3>
				<p>The button below has an event attached to its onClick listener!</p>
				<input className="btn" type="button" value="Event Trigger" onClick={alertBtn}/>
			</div>

			<div className="container">
				<h3>List.key Example:</h3>
				<TaskList tasks={tasks} />
			</div>
			
			<div className="container">		
				<h3>Inline-CSS Example:</h3>
				<div style={ { 
					"paddingLeft" : "25px",
					"fontWeight" : "bold",
					"color" : "green"} }>
					- Example Inline-CSS</div>
			</div>

			<div className="container">
				<h3>Example Class:</h3>
				<Clock />
			</div>

			<div className="container">
				<h3>Example Forms:</h3>
				<NameForm />
			</div>
		</div>;
};

export default Home;