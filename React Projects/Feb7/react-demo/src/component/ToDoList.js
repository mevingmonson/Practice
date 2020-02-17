import React from 'react';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            currrentValue: ''
        }
        this.onKeyUpMethod = this.onKeyUpMethod.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onKeyUpMethod(event) {

        if (event.keyCode === 13) {
            let newValue = {
                name: event.target.value,
                done: '',
            }
            var curValue = this.state.tasks;
            this.setState({ tasks: [...curValue, newValue], currrentValue: '' });
        }

    }

    onChange(event) {
        this.setState({ currrentValue: event.target.value })
    }

    deleteMethod(event) {
        let element = event.target;
        // this.state.tasks[]
        element.classList.add('deleteText');
    }

    displayElements(array) {
        return array.map((element, index) => {
            return (
                <li className={element.done} key={index} onClick={this.deleteMethod}>{element.name}</li>
            )
        });

    }

    render() {
        return (
            <div>
                <input type='text' id='inputfield' onKeyUp={this.onKeyUpMethod} onChange={this.onChange} value={this.state.currrentValue} />
                <ul>
                    {this.displayElements(this.state.tasks)}
                </ul>
            </div>
        )
    }
}    