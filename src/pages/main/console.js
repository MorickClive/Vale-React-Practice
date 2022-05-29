import { useState, useRef } from "react";

	function createConsole(){
		const submit = document.getElementById("submitConsole");
		const input = document.getElementById("consoleInput");
		

	}

const Console = () => {
	const [message, setMessage] = useState("Hello World");
	const input = useRef("");
	const submit = useRef("submit");
	const displayWindow = useRef("");

	function submitEntry(x) {
		if(x.value != ""){
			const element = document.createElement("p");
			element.innerHTML = x.value;
			
			displayWindow.appendChild(element);
			displayWindow.scrollTop = displayWindow.scrollHeight;
		}
	}
	
	submit.onclick = () => {
		console.log("triggered");
		submitEntry(input)
	};

	return (<>
		<div id="main">
			<div className="container">
					<h2 className="interactiveHeader">Console</h2>
					<div id="console">
						<div className="window" ref={displayWindow}>
						<p>{message}</p>
						</div>
						<div className="UI">
							<input id="submitConsole" type="button" value="Submit" ref={submit}/>
							<input id="consoleInput" type="text" ref={input} />
						</div>
					</div>
			</div>
		</div>
	</>
	);
};

export default Console;