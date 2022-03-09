import React, {Component} from 'react';
import Item from './item';
import Add from './add';
import Buttons from './buttons'

const ListArray = (props) => {
    var output = [];
    for (var i = 0; i < props.list.length; i++) {
        output.push(
            <Item 
                key={i} id={i} 
                name={props.list[i].name} 
                checked={props.list[i].checked} 
                onCheck={props.onCheck} 
                onRemove={props.onRemove} 
                onEdit={props.onEdit}
            />
        );
    }

    return (
        <div className='list'>
            {output}
        </div>
    );
}

class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { "name" : "Task 1", "checked" : false} ,
                { "name" : "Task 2", "checked" : true} ,
                { "name" : "Task 3", "checked" : false} ]
        }
        this.onCheck = this.onCheck.bind(this)
        this.onRemove = this.onRemove.bind(this)
        this.onAdd = this.onAdd.bind(this)
        this.onEdit = this.onEdit.bind(this)
        this.onToggle = this.onToggle.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    onCheck(props) {
        var newData = this.state.data;
        newData[props.target.id].checked = !this.state.data[props.target.id].checked;
        this.setState({
            data: newData
        })
    }

    onRemove(props) {
        var newData = this.state.data;
        newData.splice(props.target.id, 1);
        this.setState({
            data: newData
        })
    }

    onAdd(text) {
        var newData = this.state.data;
        newData.push({"name": text, "checked": false});
        this.setState({
            data: newData
        })
    }

    onEdit(props) {
        var newData = this.state.data;
        newData[props.id].name = props.text;
        this.setState({
            data: newData
        })
    }

    onToggle(e) {
        var bool = !this.state.data.every((item) => item.checked)
        console.log("test", bool);
        var newData = this.state.data;
        newData.map((i) => {
            var newItem = i;
            newItem.checked = bool;
            return (newItem);
        });
        this.setState({data: newData})
    }

    onDelete() {
        this.setState({data: []});
    }

    render() {
        var toggled = this.state.data.every((item) => item.checked)
        return (
            <div>
                <Buttons onToggle={this.onToggle} toggled={toggled} onDelete={this.onDelete} />
                <Add onAdd={this.onAdd}/>
                <ListArray list={this.state.data} onCheck={this.onCheck} onRemove={this.onRemove} onEdit={this.onEdit} />
            </div>
            
        )
    }
}

export default List;