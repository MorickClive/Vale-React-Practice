import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import PersonForm from "./ui/PersonForm";

const baseUrl = "http://localhost:8081/notetracker/person/";
const authHeaders = {
"Content-Type" : "application/json",
"Accept": "application/json"};

const dummyData = [
    {
        "id": 1,
        "forename": "Morick",
        "surname": "Clive",
        "age": 34
    },
    {
        "id": 2,
        "forename": "Safiya",
        "surname": "Founder",
        "age": 25
    },
    {
        "id": 3,
        "forename": "Caspian",
        "surname": "Lovett",
        "age": 27
    }
];

const PersonList = () => {
	const [people, setPeople] = useState([]);
	const [error, setError] = useState(true);
	const [updateMessage, setUpdateMessage] = useState("Loading...");

    useEffect( () => {
        retrieveData();
    }, []);

    const retrieveData = async () => {
        setUpdateMessage("Loading...");
        setError(true);
        setPeople([]);

        await fetch(baseUrl+"/readall", {method:"GET", headers: authHeaders})
        .then(response => response.json())
        .then(json => {
            setError(false);
            setPeople(json);})
        .catch(error => {
            setError(true);
            setUpdateMessage("ERROR: List cannot be loaded at this time!");
          });
    }

    const request = async (action, method, object) => {
        fetch(baseUrl+action, {"method":method, headers: {"Content-Type" : "application/json"}, body : JSON.stringify(object)})
        .then(response => response.json())
        .then(json => {
            setError(false);
            retrieveData();})
        .catch(error => {
            alert("API " + method +" Request Failed!");
          });
    }

    const onCreate = (result) => {
        request("add", "POST", result);
    }

    const onDelete = (id) => {
        request("delete?id="+id, "DELETE", "");
    }

    const onEdit = (id, updateObj) => {
        console.log(updateObj);
        request("update?id="+id, "PUT", updateObj);
    }

    const DummyDataPrompt = () => {
        return <>
            <p>[INFO]: If you do not have a backend API at localhost:8081 that is compatible with this site, data will not load here.</p>
            <p>[WARNING]: Dummy Data will not allow interaction, it will attempt to request updates or deletions to the API only.</p>
            <br />
            <input type="button" className="btn" value="Refresh Register" onClick={retrieveData}/>
            <input type="button" className="btn" value="Load Dummy Data?" onClick={()=> {setPeople(dummyData); setError(false);}} />
        </>
    }

    return (
        <>
        <div className="personList">
            { error ? 
                <>
                <h3>{updateMessage}</h3>
                {updateMessage !== "Loading..." ? <DummyDataPrompt /> : ""}
                </> : 
                people.map(person => { return <PersonCard key={person.id} personObj={person} onEdit={onEdit} onDelete={onDelete} />}) 
            }
        </div>
        <input type="button" className="btn" value="Refresh Register" onClick={retrieveData}/>
        <PersonForm action="Create" onSubmit={onCreate}/>
        </>
   );
};

export default PersonList;