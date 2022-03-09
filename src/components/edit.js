import React, {Component} from 'react';

class Edit extends Component {
    constructor(props) {
        super();
        this.state = { 
            text: props.name, 
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
        return (
            <input className='form-control mr-2'
                value={this.state.text}
                onChange={this.onChange}
                onKeyDown={this.onKey}
                />
        );
    }
}


export default Edit;