import { useState } from "react";
import renderExample from "../../renderExample";
import exampleComp from "../../components/exampleComponent";
import TaskList from "../../components/TaskList";

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
			label: 'new item',
			message: 'new message'
		}
	]);

	const alertBtn = () => {
		alert("Message Trigger");	
	};

	/* 
		TASK LIST:
			- Classes
			- Forms
	*/

	return <div id="mainBody">
			<h1>{message}</h1>
			{<p>This message is generated through inline Javascript XML!</p>}
			<br/>

			<h3>Example Component:</h3>
			<>{exampleComponent}</>
			<div className="pagedivide" />
			<br />

			<h3>Example Events:</h3>
			<p>The button below has an event attached to its onClick listener!</p>
			<input className="btn" type="button" value="Event Trigger" onClick={alertBtn}/>
			<div className="pagedivide" />
			<br />

			<h3>List.key Example:</h3>
			<TaskList tasks={tasks} />
			<div className="pagedivide" />
			<br />
			
			<h3>List.key Example:</h3>
			<div style={ { 
				"fontWeight" : "bold",
				"color" : "green"} }>
				Example Inline-CSS</div>
			<div className="pagedivide" />
			<br />

			<h3>Example Class:</h3>
			<p>Pending content</p>
			<div className="pagedivide" />
			<br />

			<h3>Example Forms:</h3>
			<p>Pending content</p>
			<div className="pagedivide" />
			<br />
		</div>;
};

export default Home;