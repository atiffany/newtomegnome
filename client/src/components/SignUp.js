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
    handleUsernameInput(input){
        const username = input;
        this.setState({ username });
    }
    handleNameInput(input) {
        const name = input;
        this.setState({ name });
    }
    handleFormSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        const name = this.state.name;

        Axios
            .post(`${ROOT_URL}/api/users`, this.state)
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
                    <input type = 'text' onChange={(text) => this.handleUsernameInput.bind(this)} placeholder="Create a Username" />
                    <input type='text' onChange={(text) => this.handleNameInput.bind(this)} placeholder="Your First Name" />
                    <button type='submit'>Create Your Account</button>
                </form>
            </div>
        );
    }
}
export default SignUp;