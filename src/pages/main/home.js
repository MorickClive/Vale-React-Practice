import exampleComp from "../../components/exampleComponent";
import { useState } from "react";
import TaskList from "../../components/TaskList";

const Home = () => {
	//jsx expressions
	const message = "Hello World";

	const [tasks, setTaskList] = useState([
		{
			id: 1,
			label: 'Example header',
			message: 'Example message'
		},
		{
			id: 2,
			label: 'new item',
			message: 'new message'
		}
	]);

	const alertBtn = () => {
		alert("Message Trigger");	
	};

	return <div id="mainBody">
			<h1>{message}</h1>
			<>{exampleComp()}</>
			<input className="btn" type="button" value="Event Trigger" onClick={alertBtn}/>
			<TaskList tasks={tasks} />
		</div>;
};

export default Home;