import { useState } from "react";


const PersonForm = (props) => {
	const [forename, setForename] = useState('');
	const [surname, setSurname] = useState('');
	const [age, setAge] = useState(18);

    const resetForm = () => {
        setForename('');
        setSurname('');
        setAge(18);
    }

    const submit = (event) => {
        event.preventDefault();

        props.onSubmit({
            "forename": forename,
            "surname": surname,
            "age": age
        });
        resetForm();
    }

    const handleForename = (event) => {
        setForename(event.target.value);
    }

    const handleSurname = (event) => {
        setSurname(event.target.value);
    }

    const handleAge = (event) => {
        setAge(event.target.value);
    }

    return <>
        <form onSubmit={submit} >
            <label>{props.action} Person</label>
			<br />
            <table>
                <tbody>
                    <tr>
                        <td />
                        <td><label>Forename:</label></td>
                        <td><input type="text" value={forename} onChange={handleForename} placeholder="First name" required></input></td>
                    </tr>
                    <tr>
                        <td />
                        <td><label>Surname:</label></td>
                        <td><input type="text" value={surname} onChange={handleSurname} placeholder="Last name" required/></td>
                    </tr>
                    <tr>
                        <td />
                        <td><label>Age:</label></td>
                        <td><input type="number" value={age} onChange={handleAge} /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Submit" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </>

}

export default PersonForm;