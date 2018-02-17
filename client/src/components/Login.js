import React from 'react';
import Axios from 'axios';

const ROOT_URL = 'http://localhost:3030';

class Login extends React.Component {
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
            .post(`${ROOT_URL}/api/users`, { username, name })
            .then(() => {
                console.log('User created');
            })
            .catch(() => {
                console.log('User not created');
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <input type = 'text' onChange={(text) => this.handleUsernameInput.bind(this)} placeholder="Create a Username" />
                    <input type='text' onChange={(text) => this.handleNameInput.bind(this)} placeholder="Your First Name" />
                    <button type='submit'>Create Your Account</button>
                </form>
            </div>
        );
    }
}
export default Login;