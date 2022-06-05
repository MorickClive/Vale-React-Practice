import React, { useContext, useState } from "react";
import HookContext from "./hookContext";

const ContextForm = () => {

  const [value, setValue] = useState("");
  const [contextHook, setContextHook] = useContext(HookContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    setContextHook(value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Context value:
        <input type="text" value={value} onChange={handleChange} style={{"marginLeft":"25px"}} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

  export default ContextForm;