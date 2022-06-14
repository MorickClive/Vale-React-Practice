import { useEffect, useState } from "react";
import ListOptions from "../../ListOptions";
import NoteCard from "./Note";
import FormNote from "./ui/Form_Note";

const NoteGroup = ({groupObj, onDelete, onEdit}) => {

    const [expand, setExpand] = useState(false); 

    const toggleExpand = () => {
        setExpand(!expand);
    }

    const displayList = (list) => { return list.map( (note) => {return <NoteCard key={note.id} noteObj={note} /> } ); };

    return <div key={groupObj.id} className="cardGroup" >
                <h3>Label: {groupObj.label}</h3>
                    <ListOptions onEdit={onEdit} onDelete={onDelete} />
                    <input type="button" onClick={toggleExpand} value={!expand ? "expand" : "close"} />
                    <br />
                    {expand ? <NoteList list={groupObj.noteList} /> : ""}
            </div>;
};


const NoteList = ({list}) => {
	const [noteList, setList] = useState([]);
	const [idCount, setIDCount] = useState(0);
	const [mode, setModes] = useState({
        "createMode" : false,
        "editMode" : false,
        "editTarget" : []
    });
    
    useEffect(() => {
        setList(list);
    },[])

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
            ["createMode"]: !mode.createMode
        }));
    };

    const toggleEditMode = (targ) => {
        setModes(prev => ({
            ...prev,
            ["editMode"]: !mode.editMode,
            ["editTarget"]: targ           
        }));
    }

    const createForm = <FormNote onSubmit={onCreate} Action="Create" />;
    const editForm = <FormNote onSubmit={onEdit} Action="Edit" />;

    return <>
        {noteList.map( (note) => {return <NoteCard key={note.id} noteObj={note} onDelete={() => {onDelete(note.id)}} onEdit={() => {toggleEditMode(note)}} /> })}
        <input type="button" value="add" onClick={toggleCreateMode}/>
        {mode.createMode ? <></> : <></>} // TODO; I am here
        {mode.editMode ? <></> : <></>}
    </>;
};

export default NoteGroup;