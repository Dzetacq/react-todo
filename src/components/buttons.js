import React from 'react';

const Buttons = (props) => {
    return (
        <div>
            <Toggle onToggle={props.onToggle} toggled={props.toggled} />
            <Delete onDelete={props.onDelete} />
        </div>
    )
}

const Toggle = (props) => {
    console.log(props.toggled);
    var text = props.toggled ? "Uncheck all" : "Complete all" ;
    return (
        <button className='toggle' onClick={props.onToggle}>{text}</button>
    )
}

const Delete = (props) => {
    return (
        <button className='delete-all' onClick={props.onDelete}>Delete all tasks</button>
    )
}

export default Buttons;