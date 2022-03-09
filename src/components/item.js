import React from 'react';
import Edit from './edit'

const Item = (props) => {
    var classes = props.checked? 'checked ' : '';
    classes += 'input-group form-check my-3';
    return (
        <div className={classes}>
            <Check checked={props.checked} onCheck={props.onCheck} id={props.id}/>
            <Edit name={props.name} onEdit={props.onEdit} id={props.id} />
            <Remove onRemove={props.onRemove} id={props.id}/>
        </div>
    )
}

const Check = (props) => {
    return (
        <input className='form-check-input' type="checkbox" checked={props.checked} onChange={props.onCheck} id={props.id}/>
    )
}

const Remove = (props) => {
    var removeStyle = {float: "right"}
    return (
        <button className='remove btn btn-danger' style={removeStyle} onClick={props.onRemove} id={props.id}>X</button>
    );
}

export default Item;