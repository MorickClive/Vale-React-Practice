import React, { useMemo, useState } from "react";

const HookMemo = () => {
    const [label, setLabel] = useState("default");
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(true);

    // memo means that if toggle changes state -"we memorise the return result", we can evaluate this return ONLY if the toggle state changes.
    // This is a form of caching and should be used to avoid slow functions from slowing the re-render of this component/hook.
    //
    // Without this, the slow Operation would be forced to be executed on every render, including initialisation - that means
    // if this method assignment takes time, so will everything else it's being rendered alongside - slowing their functionality down.
    // memo allows us to isolate this process!
    const toggleDisplay = useMemo(() => { return slowOperation(toggle)}, [toggle]);

    const toggleFlag = () => {
        setToggle(!toggle);
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        if(input !== "" && input !== undefined) {
            setLabel(input);
            setInput("");
            console.log("[Memo]: Item Submitted");
        }
        event.preventDefault();
    }

    return (
    <>
        <form onSubmit={handleSubmit} >
            <label>
            Enter new value:
            <input type="text" value={input} onChange={handleChange} style={{"marginLeft":"25px"}} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <p>Value: {label}</p>
        <br />
        <p>Toggle Status:</p>
        <p style={{"paddingLeft" : "25px"}}>- {String(toggleDisplay)}</p>
        <input type="button" className="btn" value="Functionally-Slow Toggle" onClick={toggleFlag} />

        <br />
        <p>The above flag depends on a variable that is evaluated as part of a process-heavy function, typically you'd expect this to be isolated to the button interaction, but without using the useMemo hook - all other rerenders would be forced to wait on it to return a value through the slow method; bottle-necking loading times.</p>
    </>
    );
}

const slowOperation = (flag) => {
    // purposely slow
    for(let x = 0; x < 100000000; x++) {}
    console.log("Memo 'toggle trigger' rendered");

    return !flag;
}

  export default HookMemo;