import React from 'react';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

class DisplayBooks extends React.Component {
    constructor() {
        super();
        let books = axios
                        .get(`${ROOT_URL}/api/books`)
                        .then(() => {
                            console.log('works');
                        })
                        .catch(() => {
                            console.log('does not');
                        });
    }
    render() {
        return (
               <div>{books}</div>
        );
    }
}

export default DisplayBooks;