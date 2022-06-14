import { useRef, useState } from "react";

const FormNote = (props) => {

    const [headerText, setHeader] = useState("");
    const [contentText, setContents] = useState("");

    const submit = (e) => {
        e.preventDefault();

        props.onSubmit({
            "id": 0,
            "header" : headerText,
            "contents" : contentText
        });
    };

    const handleHeader = (e) => {
        setHeader(e.target.value);
    }
    const handleContents = (e) => {
        setContents(e.target.value);
    }

    return <form onSubmit={submit} >
        <label><h3>{props.Action} Note</h3></label>
        <br />
        <table>
            <tbody>
                <tr>
                    <td><input type="text" autoFocus value={headerText} onChange={handleHeader} placeholder="Title" required></input></td>
                </tr>
                <tr>
                    <td><input type="text" value={headerText} onChange={handleContents} placeholder="Contents" required></input></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Submit" /></td>
                </tr>
            </tbody>
        </table>
    </form>;
}

export default FormNote;