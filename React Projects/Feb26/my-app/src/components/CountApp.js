import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {
    constructor(props) {
        super(props);
        let { name, age } = props;
        this.state = {
            name, age
        };
    }
    render() {
        return (
            <p> Name is {this.state.name}.Age is {this.state.age} </p >
        )
    }

}

export default Person;


function PersonTwo(props) {
    return (
        <h3>{props.name} and {props.age}</h3>
    )
}

class CountApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.handleAdd = this.handleAdd.bind(this)
        // this.handleMinus = this.handleMinus.bind(this)
    }

    handleAdd() {
        this.setState({ count: this.state.count + 1 });
    }

    handleMinus = () => {
        // if (this.state.count)
        //     this.setState({ count: this.state.count - 1 });
        if (this.state.count) {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }
    }

    render() {
        return (
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </div>
        )
    }


}


// ReactDOM.render(
//     (
//         <div>
//             <Person name={"Mevin"} age={24} />
//             <PersonTwo name={"Anand"} age={28} />
//             <CountApp />
//         </div>
//     ),
//     document.getElementById('root')
// )