import React from 'react';
import List from './List'

const ToDo = () => {
    var todoStyle = {
        margin: "auto",
        width: "50%",

    }
    return (
        <div style={todoStyle} className="todo">
            <h1>ToDo list</h1>
            <List />
        </div>
    );
}

export default ToDo;