import React from 'react';

class Login extends React.Component {

    handleClick = () => {
        window.location = 'http://localhost:3030/auth/google';
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