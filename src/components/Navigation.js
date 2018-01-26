import React from 'react';
import { Link } from 'react-browser-router';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <div className = "header">
                <div className = "header--text"> 
                    <Link to = '/'>Tome Gnome</Link>
                    <Link to = '/enterbook'>Enter A New Book</Link>
                    <Link to = '/displaybooks'>Books I've Read</Link>
                    <Link to = '/displaybooks'>Books To Read Next</Link>
                </div>
            </div>
        );
    }
}
export default Navigation;