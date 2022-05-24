import { useState, useRef } from "react";

const Calculator = () => {
	return (<>
		<h2 className="interactiveHeader">Calculator</h2>
		<div id="calculator">
			<input type="text" className="result" value="0" disabled></input>
			<div className="numberGrid">
				<input type="button" className="clrOP operation" value="C"></input>
				<input type="button" className="addOP operation" value="+"></input>
				<input type="button" className="subOP operation" value="-"></input>
				<input type="button" className="divOP operation" value="/"></input>
				<input type="button" className="multOP operation" value="*"></input>
				<input type="button" className="sqrtOP operation" value="√"></input>
				<input type="button" className="modOP operation" value="%"></input>
				<input type="button" className="eqlOP operation" value="="></input>
									 
				<input type="button" className="grid" value="1"></input>
				<input type="button" className="grid" value="2"></input>
				<input type="button" className="grid" value="3"></input>
				<input type="button" className="grid" value="4"></input>
				<input type="button" className="grid" value="5"></input>
				<input type="button" className="grid" value="6"></input>
				<input type="button" className="grid" value="7"></input>
				<input type="button" className="grid" value="8"></input>
				<input type="button" className="grid" value="9"></input>
				<input type="button" className="grid operation" value="±"></input>
				<input type="button" className="grid" value="0"></input>
				<input type="button" className="grid decimal" value="."></input>
			</div>
		</div>
	</>
	);
};

export default Calculator;