import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    // function to update state with name input from form
    const handleChange = (e) => {
        setName(e.target.value);
    }

    // function to update state of age input from form
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    // function to update state with email input from form
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // function to update state of password input from form
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // function to update state of confirm password input from form
    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
    }

    // function to call after user clicks submit
    const handleSubmit = (e) => {
        if (password != confPassword) {
            console.log('password does not match');
        } else {
            console.log('A form was submitted with Name :"' + name + '", Age :"' + age + '" and Email :"' + email + '"');
        }
        e.preventDefault();
    }

    return(
        <div className="App">
            <header className="App-header">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <h2 align="center">Register</h2>
                    <label>
                        Name:
                    </label><br />
                    <input type="text" value={name} required onChange={(e) => {handleChange(e)}}/><br/>
                    <label>
                        Email:
                    </label><br/>
                    <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}}/><br/>
                    <label>
                        Password:
                    </label><br/>
                    <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}}/><br/>
                    <label>
                        Confirm Password:
                    </label><br/>
                    <input type="password" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}}/><br/>
                    <label>
                        Age:
                    </label><br/>
                    <input type="text" value={age} required onChange={(e) => {handleAgeChange(e)}}/>
                    <input type="submit" value="Submit"/>
                </form>
            </header>
        </div>
    )
}

export default App;