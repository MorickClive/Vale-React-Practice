import { useRef, useState } from "react";

const FormNoteGroup = (props) => {

    const [titleText, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();

        props.onSubmit({
            "id": 0,
            "label" : titleText,
            "noteList" : []
        });
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    return <form onSubmit={submit} >
        <label><h3>{props.Action} Note Group</h3></label>
        <br />
        <table>
            <tbody>
                <tr>
                    <td><input type="text" autoFocus value={titleText} onChange={handleTitle} placeholder="Title" required></input></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Submit" /></td>
                </tr>
            </tbody>
        </table>
    </form>;
}

export default FormNoteGroup;