import React from "react";

export default class EventExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.loginClick = this.loginClick.bind(this);
        this.logOutClick = this.logOutClick.bind(this);

    }


    loginClick() {
        this.setState({ isLoggedIn: true });
    }

    logOutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        return this.state.isLoggedIn ?
            (<button onClick={this.logOutClick}>LogOut</button>) : (<button onClick={this.loginClick}>Login</button>);

    }


}