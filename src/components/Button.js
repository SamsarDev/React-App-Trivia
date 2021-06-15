import React, { Component } from "react";
import '../styles/build/Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    render() {
        return (
            <button className={this.props.type} onClick={this.handleClick}>{this.props.text}</button>
        )
    }
}

export default Button;