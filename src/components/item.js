import React from 'react';
import Edit from './edit'

const Item = (props) => {
    return (
        <p>
            <Check checked={props.checked} onCheck={props.onCheck} id={props.id}/>
            <Edit checked={props.checked} name={props.name} onEdit={props.onEdit} id={props.id} />
            <Remove onRemove={props.onRemove} id={props.id}/>
        </p>
    )
}

const Check = (props) => {
    return (
        <input type="checkbox" checked={props.checked} onChange={props.onCheck} id={props.id}/>
    )
}

const Remove = (props) => {
    var removeStyle = {float: "right"}
    return (
        <button className='remove' style={removeStyle} onClick={props.onRemove} id={props.id}>X</button>
    );
}

export default Item;