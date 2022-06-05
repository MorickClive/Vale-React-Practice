import { createRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

const HookRef = ({text}) => {

    // Creating a ref and hooking it into an element means that we can refer
    // to that element and handle it like we've asked the dom to get that element
    const exampleRef = createRef();

    // We want to actions to effect the reference once the element has been rendered, so refs are more valuable
    // as pointers - we can't point to something doesn't exist!!
    const action = () => {
        exampleRef.current.value = text;
        exampleRef.current.className = "btn";
        // we can perform many actions on a element, not just changing the value, but changing its properties and contents
        // we can even set the webpage to focus on a referenced element.
        exampleRef.current.focus();
    }
    
    return <>
        <input ref={exampleRef} type="button" value="Click to Change!" onClick={action}  />
    </>;
}

export default HookRef;