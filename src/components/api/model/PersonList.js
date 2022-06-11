import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import PersonForm from "./ui/PersonForm";

const data = [{
	"id": 0,
	"forename": "Morick",
	"surname": "Clive",
	"age": 34
},{
	"id": 1,
	"forename": "Safiya",
	"surname": "Founder",
	"age": 25

},{
	"id": 2,
	"forename": "Caspian",
	"surname": "Lovett",
	"age": 27
}];

const PersonList = () => {
	const [people, setPeople] = useState([]);
	const [idCount, setIDCount] = useState(0 + data.length);

    useEffect( () => {
        setPeople(data);
    }, []);

    const idIncrement = () => {
        setIDCount(idCount + 1);
    }

    const onCreate = (result) => {
        result.id = idCount;
        idIncrement();
        setPeople([...people, result]);
    }

    const onDelete = (id) => {
        setPeople(people.filter(person => person.id !== id));
    }
    const onEdit = (id, updateObj) => {
        updateObj.id = id;
        setPeople(prev => prev.map(person => person.id === id ? updateObj : person));
    }

    return (
        <>
        <div className="personList">
            {people.map(person => { return <PersonCard key={person.id} personObj={person} onEdit={onEdit} onDelete={onDelete} />}) }
        </div>
        <PersonForm action="Create" onSubmit={onCreate}/>
        </>
   );
};

export default PersonList;