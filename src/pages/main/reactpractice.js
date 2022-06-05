import { useContext, useEffect, useState } from "react";
import renderExample from "../../components/fundamentals/renderExample";
import exampleComp from "../../components/fundamentals/exampleComponent";
import TaskList from "../../components/fundamentals/models/TaskList";
import Clock from "../../components/fundamentals/Clock";
import NameForm from "../../components/fundamentals/NameForm";
import Counter from "../../components/hooks/hookState";
import HookExample from "../../components/hooks/hookEffect";
import ContextForm from "../../components/hooks/ContextForm";
import HookContext from "../../components/hooks/hookContext";
import HookRef from "../../components/hooks/hookRef";
import HookMemo from "../../components/hooks/hookMemo";
import HookCallback from "../../components/hooks/hookCallBack";

const ReactPractice = () => {
	
	useEffect(() => {
		document.title = "Vale-React-Project: Examples";

		// React Render
		renderExample();
	}, []);
	

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

	// Shared Context - review app.js to show provider.exposure.
	const contextMessage = useContext(HookContext);

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
				<input type="button" value="Event Trigger" onClick={alertBtn} className="btn"  />
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

			<div className="container">
				<h3>State Hook Example - Counter:</h3>
				<Counter />
			</div>
			
			<div className="container">
				<h3>Effect Hook Example - Counter:</h3>
				<HookExample />
			</div>

			<div className="container">
				<h3>Context Hook Example:</h3>
				<p>[ {contextMessage} ]</p>
				<ContextForm />
			</div>
			
			<div className="container">
				<h3>Ref Hook Example:</h3>
				<HookRef text="Button Upgraded!"/>
			</div>

			<div className="container">
				<h3>Memo Hook Example:</h3>
       			<br />
				<HookMemo />
			</div>

			<div className="container">
				<h3>Callback Hook Example:</h3>
				<br />
				<HookCallback />
			</div>


		</div>;
};

export default ReactPractice;