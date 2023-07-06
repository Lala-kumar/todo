import React, { useState, useRef } from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {

    const nameInputRef = useRef("");
    const ageInputRef = useRef("");

    const [error, setError] = useState("");

    // The onSubmitHandler function is defined to handle the form submission.
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        console.log(nameInputRef);

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age."
            });
            return;
        };
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age."
            });
            return;
        };
        props.onAddUser(enteredName, +enteredAge);
        ageInputRef.current.value = "";
        nameInputRef.current.value = "";

    };

    const errorHandler = () => {
        setError('');
    };
    return (
        <div>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onCloseError={errorHandler}
            />}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler} >
                    <label htmlFor="name">Enter Name: </label>
                    <input

                        ref={nameInputRef}
                    />

                    <label htmlFor="age">Age: </label>
                    <input

                        ref={ageInputRef}
                    />

                    <Button type="submit" >ADD USER</Button>
                    <Button onClick={() => alert("Hello")} >CLICK</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;