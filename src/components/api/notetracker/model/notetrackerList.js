import { useEffect, useState } from "react";
import OverlayMenu from "../../Overlay";
import NoteGroup from "./NoteGroup";
import FormNoteGroup from "./ui/Form_NoteGroup";

const data = [
    {
        "id": 0,
        "label": "NOTE GROUP 1",
        "noteList": [
            {
                "id": 1,
                "header": "GROUP 1: NEW TEST NOTE 1",
                "contents": "A new message as part of a note model."
            },
            {
                "id": 2,
                "header": "GROUP 1: NEW TEST NOTE 2",
                "contents": "A new message as part of a note model."
            }
        ]
    },
    {
        "id": 1,
        "label": "NOTE GROUP 2",
        "noteList": [
            {
                "id": 1,
                "header": "GROUP 2: NEW TEST NOTE 1",
                "contents": "A new message as part of a note model."
            },
            {
                "id": 2,
                "header": "GROUP 2: NEW TEST NOTE 2",
                "contents": "A new message as part of a note model."
            }
        ]
    }
];

const NoteTrackerList = () => {
	const [noteGroup, setNoteGroup] = useState([]);
	const [idCount, setIDCount] = useState(0 + data.length);
	const [mode, setModes] = useState({
        "createMode" : false,
        "editMode" : false,
        "editTarget" : []
    });

    useEffect( () => {
        setNoteGroup(data);
    }, []);

    const idIncrement = () => {
        setIDCount(idCount + 1);
    }

    const onCreate = (result) => {
        result.id = idCount;
        idIncrement();
        setNoteGroup([...noteGroup, result]);
        toggleCreateMode();
    }
    
    const onEdit = (updateObj) => {
        updateObj.id = mode.editTarget.id;
        updateObj.noteList = mode.editTarget.noteList;
        setNoteGroup(prev => prev.map(group => group.id === updateObj.id ? updateObj : group));
        toggleEditMode([]);
    }

    const onDelete = (id) => {
        setNoteGroup(noteGroup.filter(group => group.id !== id));
    }

    const toggleCreateMode = () => {
        setModes(prev => ({
            ...prev,
            createMode : !mode.createMode
        }));
    };

    const toggleEditMode = (targ) => {
        setModes(prev => ({
            ...prev, 
            editMode : !mode.editMode,
            editTarget : targ           
        }));
    }

    const createForm = <FormNoteGroup onSubmit={onCreate} Action="Create" />;
    const editForm = <FormNoteGroup onSubmit={onEdit} Action="Edit" />;

    return <>
        <div className="noteList">
            {noteGroup.map( (group) => {
                return <NoteGroup key={group.id} groupObj={group} onDelete={() => {onDelete(group.id)}} onEdit={() => {toggleEditMode(group)}} /> }) 
            }
        </div>
        <div>
            <input type="button" className="btn" value="Create New Group" onClick={toggleCreateMode}/>
        </div>
        { mode.createMode ? <OverlayMenu onClose={toggleCreateMode} child={createForm} /> : "" }
        { mode.editMode ? <OverlayMenu onClose={toggleEditMode} child={editForm} /> : "" }
    </>
};

export default NoteTrackerList;