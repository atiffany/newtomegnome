import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <div className = "header">
                <div className = "header--text"> 
                    <div>Tome Gnome</div>
                    <div>Enter A New Book</div>
                    <div>Books I've Read</div>
                    <div>Books To Read Next</div>
                </div>
            </div>
        );
    }
}
export default Navigation;