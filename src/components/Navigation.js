import React from 'react';
import { Link } from 'react-browser-router';
import './Navigation.css';
import logo from './largeGnome.png';

class Navigation extends React.Component {
    render() {
        return (
            <div className = "header">
                <div className = "header--title">
                    <Link to = '/'>
                    <div className = "header--title--text">Tome Gnome</div>
                    <img className = "header--title--image" src ={logo} alt = "logo"/>
                    </Link>
                </div>
                <div className = "header--text"> 
                    <Link to = '/enterbook' className = "header--text">Enter A New Book</Link>
                    <Link to = '/displaybooks' className = "header--text">Books I've Read</Link>
                    <Link to = '/displaybooks' className = "header--text">Books To Read Next</Link>
                </div>
            </div>
        );
    }
}
export default Navigation;