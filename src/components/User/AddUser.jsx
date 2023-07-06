import React, { useState } from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState("");

    // The onSubmitHandler function is defined to handle the form submission.
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age."
            });
            return;
        };
        // + (plus) for force conversion from string to number for comparing
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age."
            });
            return;
        };
        props.onAddUser(enteredUsername, +enteredAge)
        setEnteredAge("");
        setEnteredUsername("");
    };

    //this functions is defined to handle the onChange events of the respective input fields.
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    //this functions is defined to handle the onChange events of the respective input fields.
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError('');
    };
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onCloseError={errorHandler}
            />}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler} >
                    <label htmlFor="name">Enter Name: </label>
                    <input type="text" id="name" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age: </label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />

                    <Button type="submit" >ADD USER</Button>
                    <Button onClick={() => alert("Hello")} >CLICK</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;