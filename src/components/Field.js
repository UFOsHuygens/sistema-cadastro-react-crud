import React, { Component } from "react";

export class Field extends Component {
    render() {
        return (
            <div className="form-field">
                <p>{this.props.title}</p>
                <input type={this.props.type} onChange={this.props.action}/>
            </div>
        );
    }
}