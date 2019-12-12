import React, { Component } from 'react';
import {Totem} from './Totem';

import "../css/TotemLine.css";

export class TotemLine extends Component {

    
    render() {
        const totems = [];
        for(let i = 0; i< 9 ; i++) {
            totems.push(<Totem key={i}/>);
        }
        return (
            <div className="totemLine">
                {totems}
            </div>
        );
    }
}