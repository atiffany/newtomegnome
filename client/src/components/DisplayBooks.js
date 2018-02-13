import React from 'react';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

class DisplayBooks extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
        };

    }
    componentDidMount () {
        let books = axios
                        .get(`${ROOT_URL}/api/books`)
                        .then(() => {
                            console.log('works');
                        })
                        .then(books => {
                            this.setState({ books });
                        })
                        .catch(() => {
                            console.log('does not work');
                        });
    }
    render() {
        return (
               <div>{this.state.books}</div>
        );
    }
}

export default DisplayBooks;