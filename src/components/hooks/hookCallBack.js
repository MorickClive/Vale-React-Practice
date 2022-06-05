import React, { useCallback, useEffect, useState } from "react";

const HookCallback = () => {
  const [input, setInput] = useState(1);
  const [toggle, setToggle] = useState(true);

  // useCallback is similar but distinctly different than useMemo.
  //  - Memo only returns the value of a function.
  //  - Callback returns the function as a whole, rather than just the value.
  // whilst this isolates functionality until state change, this takes into consideration a greater scope than memo.
  const getList = useCallback( () => {
      return [input + 1, input + 2, input + 3];
  }, [input]);

  const handleChange = (event) => {
    let val = parseInt(event.target.value);
    setInput(isNaN(val) ? 0 : val);
  }

  return (
    <>
        <input type="number" value={input} onChange={handleChange} style={{"marginLeft":"25px"}} />
        <p>List:</p>
        <List getList={getList}/>
        <br />
        <p>Toggle Status:</p>
        <p style={{"paddingLeft" : "25px"}}>- {String(toggle)}</p>
        <input type="button" className="btn" value="Different State Toggle" onClick={() => {setToggle(!toggle)} } />
        <p>Just like with Memos, the logic here is that the Callback triggers only when the state changes, however the implication is that callback returns a whole function, rather than just operation inside, this can be useful for functions passed on events.</p>
    </>
  );
}

const List = ({getList}) => {
    const [items, setItems] = useState([0]);
    let key = 1;
    
    useEffect(() => {
        console.log("CallBack list rendered");
        setItems(getList);
    }, [getList]);

    return (<>
        {items.map( (item) => {return <p key={key++} style={{"paddingLeft" : "25px"}}>- {item}</p>})}
    </>);
}


export default HookCallback;