import { useState } from "react";
import ListOptions from "../../ListOptions";
import OverlayMenu from "../../Overlay";
import NoteCard from "./Note";
import FormNote from "./ui/Form_Note";

const NoteGroup = ({groupObj, onDelete, onEdit}) => {

    const [expand, setExpand] = useState(false); 

    const toggleExpand = () => {
        setExpand(!expand);
    }

    return <div key={groupObj.id} className="cardGroup" >
                <h3>Label: {groupObj.label}</h3>
                    {!expand ? <ListOptions onEdit={onEdit} onDelete={onDelete} /> : <></>}
                    <input type="button" onClick={toggleExpand} value={!expand ? "expand" : "close"} className="btn" />
                    <br />
                    {expand ? <NoteList list={groupObj.noteList} /> : ""}
            </div>;
};


const NoteList = ({list}) => {
	const [noteList, setList] = useState(list);
	const [idCount, setIDCount] = useState(0);
	const [mode, setModes] = useState({
        "createMode" : false,
        "editMode" : false,
        "editTarget" : []
    });

    const onDelete = (id) => {
        setList(noteList.filter(group => group.id !== id));
    }

    const idIncrement = () => {
        setIDCount(idCount + 1);
    }

    const onCreate = (result) => {
        result.id = idCount;
        idIncrement();
        setList([...noteList, result]);
        toggleCreateMode();
    }
    
    const onEdit = (updateObj) => {
        updateObj.id = mode.editTarget.id;
        updateObj.noteList = mode.editTarget.noteList;
        setList(prev => prev.map(group => group.id === updateObj.id ? updateObj : group));
        toggleEditMode([]);
    }

    const toggleCreateMode = () => {
        setModes(prev => ({
            ...prev,
            createMode: !mode.createMode
        }));
    };

    const toggleEditMode = (targ) => {
        setModes(prev => ({
            ...prev, editMode: !mode.editMode, editTarget: targ           
        }));
    }

    const createForm = <FormNote onSubmit={onCreate} Action="Create" />;
    const editForm = <FormNote onSubmit={onEdit} Action="Edit" />;

    return <>
        {noteList.map( (note) => {return <>
            <NoteCard key={note.id} noteObj={note} onDelete={() => {onDelete(note.id)}} onEdit={() => {toggleEditMode(note)}} /> 
            {mode.createMode ? <OverlayMenu key={note.id} onClose={toggleCreateMode} child={createForm} /> : ""}
            {mode.editMode ? <OverlayMenu key={note.id} onClose={() => {toggleEditMode(note)}} child={editForm} /> : ""}
            </>
        })}
        <input type="button" value="Add" onClick={toggleCreateMode} className="createItem"/>
    </>;
};

export default NoteGroup;