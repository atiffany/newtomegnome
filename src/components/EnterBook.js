import React from 'react';

class EnterBook extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div>Enter The Book You Have Read</div>
                <form>
                    <input type = "text" placeholder = "enter a title" />
                    <input type = "text" placeholder = "enter an author" />
                    <button type = "submit">Find This Book</button>
                </form>
            </div>
        );
    }
}

export default EnterBook;