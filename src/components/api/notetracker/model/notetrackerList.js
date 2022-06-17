import { useEffect, useState } from "react";
import OverlayMenu from "../../Overlay";
import NoteGroup from "./NoteGroup";
import FormNoteGroup from "./ui/Form_NoteGroup";

const dummyData = [
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

const baseUrl = "http://localhost:8081/notetracker/notegroup";
const authHeaders = {
"Content-Type" : "application/json",
"Accept": "application/json"};

const listMode = {
    "createMode" : false,
    "editMode" : false,
    "editTarget" : []
}

const NoteTrackerList = () => {
	const [noteGroup, setNoteGroup] = useState([]);
	const [mode, setModes] = useState(listMode);
	const [error, setError] = useState(true);
	const [updateMessage, setUpdateMessage] = useState("Loading...");

    useEffect( () => {
        retrieveData();
    }, []);

    const retrieveData = async () => {
        setUpdateMessage("Loading...");
        setError(true);
        setNoteGroup([]);

        await fetch(baseUrl+"/readall", {method:"GET", headers: authHeaders})
        .then(response => response.json())
        .then(json => {
            setError(false);
            setNoteGroup(json);})
        .catch(error => {
            setError(true);
            setUpdateMessage("ERROR: List cannot be loaded at this time!");
          });
    }

    const request = async (action, method, object) => {
        await fetch(baseUrl+action, {"method":method, headers: {"Content-Type" : "application/json"}, body : JSON.stringify(object)})
        .then(response => response.json())
        .then(json => {
            setError(false);
            retrieveData();
            })
        .catch(error => {
            alert("API " + method +" Request Failed!");
          });
    }

    const onCreate = (result) => {
        request("/add", "POST", result);
        toggleCreateMode();
    };
    
    const onEdit = (updateObj) => {
        updateObj.id = mode.editTarget.id;

        console.log(updateObj);
        
        request("/update?id="+mode.editTarget.id, "PUT", updateObj);
        toggleEditMode([]);
    };

    const onDelete = (delObj) => {
        if(window.confirm("Are you sure you wish to delete: " + delObj.label + "?")){
            request("/delete?id="+delObj.id, "DELETE", "");
        }
    };

    const toggleCreateMode = () => {
        setModes({createMode: !mode.createMode} );
    };

    const toggleEditMode = (targ) => {
        setModes({editMode: !mode.editMode, editTarget: targ} );
    };

    const createForm = <FormNoteGroup onSubmit={onCreate} Action="Create" />;
    const editForm = <FormNoteGroup onSubmit={onEdit} Action="Edit" />;
    const DummyDataPrompt = () => {
        return <>
            <p>[INFO]: If you do not have a backend API at localhost:8081 that is compatible with this site, data will not load here.</p>
            <p>[WARNING]: Dummy Data will not allow interaction, it will attempt to request updates or deletions to the API only.</p>
            <br />
            <input type="button" className="btn" value="Refresh Note Tracker" onClick={retrieveData}/>
            <input type="button" className="btn" value="Load Dummy Data?" onClick={()=> {setNoteGroup(dummyData); setError(false);}} />
        </>
    }

    return <>
        <div className="noteList">
        { error ?
            <>
                <h3>{updateMessage}</h3>
                {updateMessage !== "Loading..." ? <DummyDataPrompt /> : ""}
            </>
            :
            noteGroup.map( (group) => {
                return <NoteGroup key={group.id} groupObj={group} updateRequest={retrieveData} onDelete={() => {onDelete(group)}} onEdit={() => {toggleEditMode(group)}} /> })
        }
        </div>
        <div>
            <input type="button" className="btn" value="Create New Group" onClick={toggleCreateMode}/>
            <input type="button" className="btn" value="Refresh Note Tracker" onClick={retrieveData}/>
        </div>
        { mode.createMode ? <OverlayMenu onClose={toggleCreateMode} child={createForm} /> : "" }
        { mode.editMode ? <OverlayMenu onClose={toggleEditMode} child={editForm} /> : "" }
    </>
};

export default NoteTrackerList;