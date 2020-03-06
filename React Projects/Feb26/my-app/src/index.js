import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <h3> Name is {this.props.name}.Age is {this.props.age} </h3 >
        )
    }

}

function PersonTwo(props) {
    return (
        <h3>{props.name} and {props.age}</h3>
    )
}


ReactDOM.render(
    (
        <div>
            <Person name={"Mevin"} age={24} />
            <PersonTwo name={"Anand"} age={28} />
        </div>
    ),
    document.getElementById('root')
)