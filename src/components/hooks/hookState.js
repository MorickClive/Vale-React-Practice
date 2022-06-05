import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    
    return <>
        <input className="btn" type="button" value="Increment" onClick={() => {setCounter(counter +1);} } />
        <input className="btn" type="button" value="Decrement" onClick={() => {setCounter(counter -1);} } />
        <input className="btn" type="button" value="Clear" onClick={() => {setCounter(0);} } />
        <p>Counter: [{counter}]</p>    
    </>;
}

export default Counter;