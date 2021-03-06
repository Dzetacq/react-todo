import React, {Component} from 'react';

class Add extends Component {
    constructor(props) {
        super();
        this.state = { text: '', onClick: props.onAdd };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onClick() {
        this.state.onClick(this.state.text);
    }

    render() {
        return (
            <div className='input-group my-3'>
                <Button onClick={this.onClick}/>
                <input className='form-control'
                    value={this.state.text}
                    onChange={this.onChange}
                    placeholder="Add item"
                    />
            </div>
        );
    }
}

const Button = (props) => {
    return (
        <button className='btn btn-primary mr-2' onClick={props.onClick}>+</button>
    )
}


export default Add;