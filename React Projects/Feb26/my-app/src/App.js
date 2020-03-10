import React, { Component } from 'react'
import Form from './components/From'
import ListContainer from './components/ListContainer'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let listCopy = [...this.state.list];
        // let listCopy = this.state.list.slice();

        const { Name, Age } = event.target;

        listCopy.push({
            id: new Date().getTime(),
            Name: Name.value,
            Age: Age.value
        });

        this.setState({ list: listCopy });
        Name.value = '';
        Age.value = '';
        console.log(listCopy);
    }

    render() {
        return (
            <div className="container">
                <h2>Hello</h2>
                <Form onSubmit={this.handleSubmit} />
                <ListContainer list={this.state.list} />
            </div>
        )
    }
}
