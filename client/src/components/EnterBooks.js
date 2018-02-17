import React from 'react';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3030';

class EnterBooks extends React.Component {
    constructor() {
        super();
        this.state= {
            title: '',
            author: '',
        };
    }
    handleTitleInput(event) {
        this.setState({ title : event.target.value });
        console.log(this.yastate);
    };
    handleAuthorInput(event) {
        this.setState({ author: event.target.value });
        console.log(this.state);
    };
    handleFormSubmit(event) {
        event.preventDefault();
        const title = this.state.title;
        const author = this.state.author;
        axios
            .post(`${ROOT_URL}/api/books`, { title, author })
            .then(() => {
                console.log('Book added');
            })
            .catch(() => {
                console.log('Error occurred');
            });
    };

    render() {
        return (
        <div>
            <form onSubmit = {this.handleFormSubmit.bind(this)}>
                <input type="text" onChange={this.handleAuthorInput.bind(this)} placeholder="Enter the Author" />
                <input type="text" onChange={this.handleTitleInput.bind(this)} placeholder="Enter the Title" />
                <button type="submit">Enter this Book</button>
            </form>
        </div>
        );
    };
};
export default EnterBooks;