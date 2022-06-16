import { useState } from "react";
import OverlayMenu from "../../Overlay";
import PersonForm from "./ui/PersonForm";

const PersonCard = ({personObj, onEdit, onDelete}) => {
    
    const [editMode, setEdit] = useState(false); 

    const editEntity = (props, mode) => {
        onEdit(personObj.id, props);
        setEdit(!editMode);
    }

    const deleteEntity = () => {
        if(window.confirm("Are you sure you wish to delete: " + personObj.forename + " " + personObj.surname+"?")){
            onDelete(personObj.id);
        }
    }

    return  editMode ? 
            ( <div key={personObj.id} className="personCard"> <h3>{personObj.id}</h3> 
            <PersonForm action="Edit" onSubmit={editEntity} onCancel={() => setEdit(false)} forename={personObj.forename} surname={personObj.surname} age={personObj.age} /> </div>)
            :
            (
            <div key={personObj.id} className="personCard">
                <div className="personOptions">
                <input className="btn" type="button" value="Edit" onClick={()=>setEdit(true)} />
                <input className="btn"  type="button" value="Delete" onClick={deleteEntity}/>

                </div>

                <h4 style={{"float" : "right"}}>ID: {personObj.id}</h4>
                <h3>Person: {personObj.forename} {personObj.surname}</h3>
                <div className="pagediv" />
                <p>Age: {personObj.age}</p>
                <br />
                <p>Example filler information, potential description</p>
            </div>);
};

export default PersonCard;