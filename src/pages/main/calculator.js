import React, { useState, useEffect } from 'react';

const Calculator = () => {
	
	useEffect(() => {	
		document.title = "Vale-React-Project: Calculator";
	}, []);

	const [displayValue, setDisplay] = useState('0');
	const [storedVal, setStoredVal] = useState(null);
	const [pendingVal, setPendingVal] = useState(false);
	const [operator, setOperator] = useState(null);
	
	const clearScreen = () => {
		setDisplay('0');
		setStoredVal(null);
		setPendingVal(false);
		setOperator(null);
	}
	
	const inputDigit = (digit) => {
		if (pendingVal === true) {
			setDisplay(digit);
			setPendingVal(false);
		} else {
			setDisplay((displayValue === '0' ? digit : displayValue + digit) );
		}
	}
	
	const inputSQRT = () => {
		setDisplay(displayValue === '0' ? -0 : Math.sqrt(displayValue));
	}
	
	const inputInvert = () => {		
		setDisplay(displayValue === '0' ? -0 : -displayValue);
	}
	
	const inputDecimal = () => {
		if (!displayValue.includes('.')) {
			setDisplay(displayValue+'.');
		}
	}
	
	const calculate = (x, y, operator) => {
		switch(operator) {
			case '+':
				return x + y;
			case '-':
				return x - y;
			case '*':
				return x * y;
			case '/':
				return x / y;
			case '%':
				return x % y;
			default:
				return NaN;
		}
	}
	
	const handleOperator = (op) => {
		const inputValue = parseFloat(displayValue);
	
		if (storedVal === null && !isNaN(inputValue)) {
			setStoredVal(inputValue);
		} else if (operator) {
			const result = calculate(storedVal, inputValue, operator);
	
			setDisplay(`${parseFloat(result.toFixed(7))}`);
			setStoredVal(result);
		}
	
		setPendingVal(true);
		setOperator(op);
	}

	const buttonPress = (event) => {
			const { target } = event;
			const { value } = target;
	
			if (!target.matches('input')) {
				return;
			}
			
			switch (value) {
				case '+':
				case '-':
				case '*':
				case '/':
				case '%':
				case '=':
					handleOperator(value);
					break;
				case '.':
					inputDecimal();
					break;
				case '√':
					inputSQRT();
					break;
				case '±':
					inputInvert();
					break;
				case 'C':
					clearScreen();
					break;
				
				default:
					if (Number.isInteger(parseFloat(value))) {
						inputDigit(value);
					}
			}
		};

	return (<>
		<div id="main">
			<div className="container">
				<h2 className="interactiveHeader">Calculator</h2>
				<div id="calculator">
					<input type="text" className="result" value={displayValue} disabled></input>
					<div className="numberGrid">
						<input type="button" onClick={buttonPress} className="clrOP operation" value="C"></input>
						<input type="button" onClick={buttonPress} className="addOP operation" value="+"></input>
						<input type="button" onClick={buttonPress} className="subOP operation" value="-"></input>
						<input type="button" onClick={buttonPress} className="divOP operation" value="/"></input>
						<input type="button" onClick={buttonPress} className="multOP operation" value="*"></input>
						<input type="button" onClick={buttonPress} className="sqrtOP operation" value="√"></input>
						<input type="button" onClick={buttonPress} className="modOP operation" value="%"></input>
						<input type="button" onClick={buttonPress} className="eqlOP operation" value="="></input>
											
						<input type="button" onClick={buttonPress} className="grid" value="1"></input>
						<input type="button" onClick={buttonPress} className="grid" value="2"></input>
						<input type="button" onClick={buttonPress} className="grid" value="3"></input>
						<input type="button" onClick={buttonPress} className="grid" value="4"></input>
						<input type="button" onClick={buttonPress} className="grid" value="5"></input>
						<input type="button" onClick={buttonPress} className="grid" value="6"></input>
						<input type="button" onClick={buttonPress} className="grid" value="7"></input>
						<input type="button" onClick={buttonPress} className="grid" value="8"></input>
						<input type="button" onClick={buttonPress} className="grid" value="9"></input>
						<input type="button" onClick={buttonPress} className="grid operation" value="±"></input>
						<input type="button" onClick={buttonPress} className="grid" value="0"></input>
						<input type="button" onClick={buttonPress} className="grid decimal" value="."></input>
					</div>
				</div>
			</div>
		</div>
	</>
	);
};

export default Calculator;