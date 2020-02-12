import React from 'react';

export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'Stranger'
        };
        this.onKeyUpMethod = this.onKeyUpMethod.bind(this);
        this.submitMethod = this.submitMethod.bind(this);
    }

    onKeyUpMethod(event) {
        let value = event.target.value;
        this.setState({ inputValue: value });
    }

    submitMethod(e) {
        e.preventDefault();
        let value = document.getElementById('inputfield').value;
        this.setState({ inputValue: value });
    }

    render() {
        return (
            <form onSubmit={this.submitMethod}>
                <h1>Hello {this.state.inputValue}</h1>
                <input type='text' onKeyUp={this.onKeyUpMethod} />
                <input type='text' id='inputfield' />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}