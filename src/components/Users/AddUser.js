import React, { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';


const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();
    console.log(nameInputRef, ageInputRef);

    const addUserHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        // console.log(nameInputRef, ageInputRef)
        if (enteredUserAge.trim().length === 0 && enteredName.trim().length === 0 ){
            setError({
                title: "Invalid Input",
                message: "Please Enter Valid Username and Age, Non-Empty Values"
            });
            return;
        }
        if ( +enteredUserAge < 1 ){
            setError({
                title: "Invalid Input",
                message: "Please Enter Valid Age"
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
    };

    // const usernameChangeHandler = (event) =>{
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) =>{
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = () => {
        setError(null);
    };


    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
                <Card className={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" ref={nameInputRef} />
                        <label htmlFor="age">Age (Years)</label>
                        <input id="age" type="number" ref={ageInputRef} />
                        <Button type="submit"> Add User </Button>
                    </form>
                </Card>
        </Wrapper>
    )};

export default AddUser;