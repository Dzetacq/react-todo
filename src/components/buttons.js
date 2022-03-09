import React from 'react';

const Buttons = (props) => {
    return (
        <div className='my-3'>
            <Toggle onToggle={props.onToggle} toggled={props.toggled} />
            <Delete onDelete={props.onDelete} />
        </div>
    )
}

const Toggle = (props) => {
    var text = props.toggled ? "Uncheck all" : "Complete all" ;
    return (
        <button className='toggle btn btn-primary mr-2' onClick={props.onToggle}>{text}</button>
    )
}

const Delete = (props) => {
    return (
        <button className='delete-all btn btn-danger' onClick={props.onDelete}>Delete all tasks</button>
    )
}

export default Buttons;