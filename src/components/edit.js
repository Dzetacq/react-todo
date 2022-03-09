import React, {Component} from 'react';

class Edit extends Component {
    constructor(props) {
        super();
        this.state = { 
            text: props.name, 
            checked: props.checked,
            onEnter: props.onEdit,
            id: props.id
        };
        this.onChange = this.onChange.bind(this);
        this.onKey = this.onKey.bind(this);
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onKey(e) {
        if (e.key === 'Enter') {
            var props = {
                'text': this.state.text,
                'id': this.state.id
            }
            this.state.onEnter(props)
            window.focus();
        } 
    }

    render() {
        var checkedStyle = { textDecoration: "line-through"}
        var uncheckedStyle = {textDecoration: "none"}
        return (
            <input style={this.state.checked? checkedStyle : uncheckedStyle}
                className='form-control'
                value={this.state.text}
                onChange={this.onChange}
                onKeyDown={this.onKey}
                />
        );
    }
}


export default Edit;