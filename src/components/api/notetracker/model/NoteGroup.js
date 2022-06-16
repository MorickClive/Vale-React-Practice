import { useState } from "react";
import ListOptions from "../../ListOptions";
import OverlayMenu from "../../Overlay";
import NoteCard from "./Note";
import FormNote from "./ui/Form_Note";

const listMode = {
    "createMode" : false,
    "editMode" : false,
    "editTarget" : []
}

const NoteGroup = ({groupObj: {id, label, noteList}, setter, onDelete, onEdit}) => {

    const [expand, setExpand] = useState(false);

    return <div key={id} className="cardGroup"  >
                <h3>Label: {label}</h3>
                    {!expand ? <ListOptions onEdit={onEdit} onDelete={onDelete} /> : <></>}
                    <input type="button" onClick={() => {setExpand(!expand)}} value={!expand ? "expand" : "close"} className="btn" />
                    <br />
                    {expand ? <NoteList list={noteList} setter={setter} groupID={id}/> : ""}
            </div>;
};

const NoteList = ({list, groupID, setter}) => {
    return <>
        {list.map( (note) => {return <>
            <NoteCard key={note.id} noteObj={note} />
            </>
        })}
        <input type="button" value="Add" onClick="" className="createItem"/>
    </>;
};

export default NoteGroup;