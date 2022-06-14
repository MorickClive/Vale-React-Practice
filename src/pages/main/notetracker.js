import { useContext, useEffect } from "react";
import NoteTrackerList from "../../components/api/notetracker/model/notetrackerList";
import HookContext from "../../components/hooks/hookContext";

const NoteTracker = () => {
	document.title = "Vale-React-Project: NoteTracker";
	useEffect(() => {
		console.log("rendered: " + document.title);
	}, []);

	const [context, setContext] = useContext(HookContext);

	return <div id="main">
		<div className="container">
			<h2>NoteTracker page</h2>
			<br />
			<NoteTrackerList />
		</div>
	</div>
};

export default NoteTracker;