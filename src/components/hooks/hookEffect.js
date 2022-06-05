import { useEffect, useState } from 'react';

const HookExample = () => {
    const [counter, setCounter] = useState(0);

    // Effectively the same as "On Mount", runs once on initial render.
    useEffect(() => {
        console.log("useEffect: 'On Mount' example.");
	}, [] );
    
    // when we want to monitor a state change, we can use the array in the 2nd position to refer to the state
    // being observed for changes.
	useEffect(() => {
        console.log("Counter Value: "+counter);

        // when we want to perform a cleanup operation, we can use a function return in order
        // to specify operations to perform after a state change happens.
        //
        // this can be useful to manage resources that might be secondary to our immediate operation.
        return () => {
            console.log("Cleanup triggered!");
            }
	}, [counter] );

    return <>
        <input className="btn" type="button" value="Increment" onClick={() => {setCounter(counter +1);} } />
        <input className="btn" type="button" value="Decrement" onClick={() => {setCounter(counter -1);} } />
        <input className="btn" type="button" value="Clear" onClick={() => {setCounter(0);} } />
        <p>Counter: [{counter}]</p>    
    </>;
}

export default HookExample;