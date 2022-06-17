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

const baseUrl = "http://localhost:8081/notetracker/note";
const authHeaders = {
"Content-Type" : "application/json",
"Accept": "application/json"};

const NoteGroup = ({groupObj: {id, label, noteList}, updateRequest, onDelete, onEdit}) => {

    const [expand, setExpand] = useState(false);

    return <div key={id} className="cardGroup"  >
                <h3>{label}</h3>
                    {!expand ? <ListOptions onEdit={onEdit} onDelete={onDelete} /> : <></>}
                    <input type="button" onClick={() => {setExpand(!expand)}} value={!expand ? "expand" : "close"} className="btn" />
                    <br />
                    {expand ? <NoteList list={noteList} updateRequest={updateRequest} groupID={id}/> : ""}
            </div>;
};

const NoteList = ({list, updateRequest, groupID}) => {
    // eslint-disable-next-line
    const [noteList, setList] = useState(list);
	const [mode, setModes] = useState(listMode);

    const retrieveData = () => {
        updateRequest();
    }

    const request = async (action, method, object) => {
        await fetch(baseUrl+action, {"method":method, headers: authHeaders, body : JSON.stringify(object)})
        .then(response => response.json())
        .then(json => {
            retrieveData();
            })
        .catch(error => {
            alert("API " + method +" Request Failed!");
          });
    }

    const onDelete = (note) => {
        if(window.confirm("Are you sure you wish to delete: " + note.header + "?")){
            request("/delete?id="+ note.id, "DELETE", "");
        }
    }

    const onCreate = (result) => {
        result.fkId = groupID;
        
        request("/add", "POST", result);
        toggleCreateMode();
    }
    
    const onEdit = (result) => {
        result.id = mode.editTarget.id;
        result.fkId = groupID;
        
        request("/update?id="+mode.editTarget.id, "PUT", result);
        toggleEditMode([]);
    }

    const toggleCreateMode = () => {
        setModes({"createMode": !mode.createMode});
    };

    const toggleEditMode = (targ) => {
        setModes({"editMode": !mode.editMode, "editTarget": targ});
    }

    const createForm = <FormNote onSubmit={onCreate} Action="Create" />;
    const editForm = <FormNote onSubmit={onEdit} Action="Edit" />;

    return <>
        {noteList.map( (note) => {return <div key={note.id}>
                <NoteCard noteObj={note} onDelete={() => {onDelete(note)}} onEdit={() => {toggleEditMode(note)}} /> 
                {mode.editMode ? <OverlayMenu onClose={() => {toggleEditMode(note)}} child={editForm} /> : ""}
            </div>
        })}
        {mode.createMode ? <OverlayMenu onClose={toggleCreateMode} child={createForm} /> : ""}
        <input type="button" value="Add" onClick={toggleCreateMode} className="createItem"/>
    </>;
};

export default NoteGroup;