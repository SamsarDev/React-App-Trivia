import React, { Component } from "react";
import '../styles/build/Badge.css';

class Badge extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    render() {
        return (
            <div className={`badge ${this.props.type}`}>
                {this.props.type === 'default' ? this.props.text : null}
                {this.props.type === 'score' ? <div className="badge-title">SCORE</div> : null}
                {this.props.type === 'score' ? <div className="badge-value">{`${this.props.text} points`}</div> : null}
            </div>
        )
    }
}

export default Badge;