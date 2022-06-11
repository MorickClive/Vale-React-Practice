import { useState } from "react";
import PersonForm from "./ui/PersonForm";

const PersonCard = ({personObj, onEdit, onDelete}) => {
    
    const [editMode, setEdit] = useState(false); 

    const editEntity = (props, mode) => {
        onEdit(personObj.id, props);
        setEdit(!editMode);
    }

    const deleteEntity = () => {
        onDelete(personObj.id);
    }

    return  editMode ? 
            ( <div key={personObj.id} className="personCard"> <h3>{personObj.id}</h3> <PersonForm action="Edit" onSubmit={editEntity} /> </div>)
            :
            (
            <div key={personObj.id} className="personCard">
                <div className="personOptions">
                <input className="btn" type="button" value="Edit" onClick={editEntity}/>
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