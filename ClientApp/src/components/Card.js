import React, { Component } from 'react';
import '../css/Card.css';
export class Card extends Component {
    render() {
        const clsName = "card pos" + this.props.position;
        return (
            <div className={clsName}>
                <span className="topNumber">{this.props.value}</span>
                <span className="midNumber">{this.props.value}</span>
                <span className="botNumber">{this.props.value}</span>
            </div>
        );
    }
}