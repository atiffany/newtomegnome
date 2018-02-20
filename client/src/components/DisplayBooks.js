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
        axios
            .get(`${ROOT_URL}/api/books/all`)
            .then((res) => {
                console.log('works');
                console.log(res.data);
                this.setState({ books: res.data })
                console.log(this.state.books);
            })
            .catch((error) => {
                console.log('does not work: ', error);
            });
                
    }
    render() {
        return (
            <div>
                <div>Books Our Users Have Read</div>
               {this.state.books.map(item => {
                    return <div key={item.id}>{item.title} by {item.author}</div>
               })}
            </div>
        );
    }
}

export default DisplayBooks;