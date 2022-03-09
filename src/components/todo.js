import React from 'react';
import List from './List'

const ToDo = () => {
    var todoStyle = {
        margin: "auto",
        width: "66%",
    }
    return (
        <div style={todoStyle} className="todo mt-3">
            <h1>ToDo list <small className='text-muted'> by Ebert Rens</small></h1>
            <List />
        </div>
    );
}

export default ToDo;