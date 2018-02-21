import React from 'react';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3030';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            name: '',
        };
    }
    handleUsernameInput= (event) => {
        const username = event.target.value;
        this.setState({ username });
    }
    handleNameInput = (event) => {
        const name = event.target.value;
        this.setState({ name });
    }
    handleFormSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        console.log(username);
        //const name = this.state.name;

        axios
            .get(`${ROOT_URL}/api/users/user/${username}`)
            .then((res) => {
                console.log('User Exists ', res);
                this.props.history.push('/displaybooks');
            })
            .catch((err) => {
                console.log('User not Found: ', err.response);
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <input type = 'text' onChange={this.handleUsernameInput} placeholder="Create a Username" />
                    <input type='text' onChange={this.handleNameInput} placeholder="Your First Name" />
                    <button type='submit'>Create Your Account</button>
                </form>
            </div>
        );
    }
}
export default Login;