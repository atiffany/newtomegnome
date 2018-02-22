import React from 'react';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3030';

class Login extends React.Component {

    handleClick = () => {
        axios
            .get(`${ROOT_URL}/auth/google`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <div>Log In With Google</div>
                <div onClick={this.handleClick}>Click Here</div>
            </div>

        );
    }
}
export default Login;