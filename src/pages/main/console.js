import React, { useEffect, useState } from "react";
import Display from "../../components/console/ConsoleDisplay";

const Console = () => {

	useEffect(() => {
		document.title = "Vale-React-Project: Console";
	}, []);

	const [input, setInput] = useState('');
	const [display, setDisplay] = useState( [ {id: 0, msg : "Hello World!"}, {id: 1, msg : "Hello World!"} ] );
	const displayRef = React.createRef();

	const listCommands = () => {
		let commandList = new Map();
		let msg = "";
		
		// Output of commands are stored in map, add additional command prompts here.
		commandList.set("/q, /cls, /clear", "clears console display.");
		commandList.set("/?, /help, /lscmd", "displays available commands.");

		// Structures jsx to <h5>{key}</h5><div>{value}</div>
		commandList.forEach((x, y) => { return msg = <>{msg}<h5>{y} </h5> <div style={{"paddingLeft" : "15px"}}>{x}</div></>});
		// Appends jsx title with borders
		msg = <><p>{"=".repeat(40)}</p> <h3>[CONSOLE: Command List]:</h3> <p>{"=".repeat(40)}</p>{msg}</>;
		
		const list = [{id: display.length, msg: msg}];
		addEntries(list);
	}

	const checkCommands = (y) => {
		if(y.startsWith("/")){
			let x = y.replace("/","");
			
			switch(x.toLowerCase()){
				case "q":
				case "cls":
				case "clear":
					clearConsole();
				break;
				
				case "?":
				case "help":
				case "lscmd":
					listCommands();
				break;
				
				default:
					addEntries([{id: display.length, msg: "[Console:] Command: \"" + y + "\" not found!" }]);
			}
			return true;
		}
		return false;
	}
	
	const clearConsole = () => {
		setDisplay([]);
	}
	
	const clearInput = () => {
		setInput("");
	}

	const addEntries = (list) => {
		setDisplay([...display, ...list]);
		displayRef.current.scrollTop = displayRef.current.scrollHeight;	
	}

	const handleSubmit = (event) => {
		const entry = event.target.consoleInput.value;
		if(checkCommands(entry) || (entry === null || entry === undefined || entry === "")){
		} else {
			addEntries([{id: display.length, msg: entry }]);
		}
		clearInput();
		event.preventDefault();
	};
	
	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return (<>
		<div id="main">
			<form className="container" onSubmit={handleSubmit}>
					<h2 className="interactiveHeader">Console</h2>
					<div id="console">
						<div className="window" ref={displayRef}>
							<Display messages={display}/>
						</div>
						<div className="UI">
							<input id="submitConsole" type="submit" value="Submit" />
							<input id="consoleInput" type="text" value={input} onChange={handleChange} />
						</div>
					</div>
			</form>
		</div>
	</>
	);
};

export default Console;