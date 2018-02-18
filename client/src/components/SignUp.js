import React from 'react';
import Axios from 'axios';
import './SignUp.css';

const ROOT_URL = 'http://localhost:3030';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            name: '',
        };
    }
    handleUsernameInput = (event) => {
        const username = event.target.value;
        this.setState({ username });
    }
    handleNameInput = (event) => {
        const name = event.target.value;
        this.setState({ name });
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const user = this.state;
        console.log(user);
        Axios
            .post(`${ROOT_URL}/api/users`, user)
            .then((res) => {
                console.log('User created: ', res);
            })
            .catch((error) => {
                console.log('User not created: ', error);
            });
    }
    render() {
        return (
            <div className="box">
                <div>Sign Up</div>
                <div>Sign up to keep track of all your reading lists</div>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <input type = 'text' onChange={this.handleUsernameInput} placeholder="Create a Username" />
                    <input type='text' onChange={this.handleNameInput} placeholder="Your First Name" />
                    <button type='submit'>Create Your Account</button>
                </form>
            </div>
        );
    }
}
export default SignUp;