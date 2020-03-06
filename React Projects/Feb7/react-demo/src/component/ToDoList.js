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
        this.doneMethod = this.doneMethod.bind(this);
        this.editMethod = this.editMethod.bind(this);

    }

    onKeyUpMethod(event) {

        if (event.keyCode === 13 && event.target.value !== '') {
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

    doneMethod(event) {
        let element = event.target;
        let id = event.target.getAttribute('data-id');

        let tasks = this.state.tasks;
        let t = tasks[id];
        t.done = t.done == "done" ? "" : "done";
        this.setState({
            tasks
        });
    }

    editMethod(event) {



    }

    displayElements(array) {
        return array.map((element, index) => {
            return (
                <li key={index} data-id={index} >
                    <div>
                        <input type='checkbox' id={index} onClick={this.doneMethod} data-id={index} />
                        <label className={element.done}> {element.name}</label>
                        <input type='button' onClick={this.editMethod} value="Edit" data-id={index} />
                        <input type='button' onClick={this.deleteMethod} data-id={index} value="Delete" />
                    </div>
                </li>
            )
        });

    }

    render() {
        return (
            <div>
                <input type='text' onKeyUp={this.onKeyUpMethod} onChange={this.onChange} value={this.state.currrentValue} />
                <ul>
                    {this.displayElements(this.state.tasks)}
                </ul>
            </div>
        )
    }
}    