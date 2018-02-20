import React from 'react';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3030';

class DisplayBooks extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
        };

    }
    componentDidMount () {
        let booksList = axios
            .get(`${ROOT_URL}/api/books/all`)
            .then(() => {
                console.log('works');
            })
            .catch((error) => {
                console.log('does not work: ', error);
            });
        console.log(booksList);
       // this.setState({ books: books[0] });
                
    }
    render() {
        return (
               <div>{this.state.books}</div>
        );
    }
}

export default DisplayBooks;