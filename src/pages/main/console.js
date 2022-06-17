import React, { useContext, useEffect, useState } from "react";
import Display from "../../components/console/ConsoleDisplay";
import HookContext from "../../components/hooks/hookContext";

const Console = () => {
	document.title = "Vale-React-Project: Console";
	
	useEffect(() => {
		console.log("rendered: " + document.title);
	}, []);
	// eslint-disable-next-line
	const [context, setContext] = useContext(HookContext);

	const [input, setInput] = useState('');
	const [display, setDisplay] = useState( [ {id: 0, msg : <>Current Context: {context}<br />Hello World!</>} ] );
	const displayRef = React.createRef();

	// ========================================
	// Console Functions:
	// ========================================

	const listCommands = () => {
		let commandList = new Map();
		let msg = "";
		
		// Output of commands are stored in map, add additional command prompts here.
		commandList.set("/q, /cls, /clear", "clears console display.");
		commandList.set("/?, /help, /lscmd", "displays available commands.");

		// Structures jsx to <h5>{key}</h5><div>{value}</div>
		commandList.forEach((x, y) => { return msg = <>
			{msg} {y} <br /> - {x} <br />
		</>});
		// Appends jsx title with borders
		msg = <>{"=".repeat(40)}<br />[CONSOLE: Command List]:<br />{"=".repeat(40)}<br />{msg}</>;
		
		const list = [{id: display.length, msg: msg}];
		addToDisplay(list);
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
					addToDisplay([{id: display.length, msg: "[Console:] Command: \"" + y + "\" not found!" }]);
			}
			return true;
		}
		return false;
	}
	
	const clearConsole = () => {
		setDisplay([ {id: 0, msg : <>Current Context: {context}<br />Hello World!</>} ]);
	}
	
	const clearInput = () => {
		setInput("");
	}

	const addToDisplay = (list) => {
		setDisplay([...display, ...list]);
		displayRef.current.scrollTop = displayRef.current.scrollHeight;	
	}

	// ========================================
	// Element Hooks:
	// ========================================
	
	const handleSubmit = (event) => {
		const entry = event.target.consoleInput.value;
		if(checkCommands(entry) || (entry === null || entry === undefined || entry === "")){
		} else {
			addToDisplay([{id: display.length, msg: entry }]);
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