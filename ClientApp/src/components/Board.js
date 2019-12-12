import React, { Component } from 'react';
import {TotemLine} from './TotemLine';
import {Hand} from './Hand';
import {Pile} from './Pile';

export class Board extends Component {
    render() {
        return (
            <div className="boardContainer">
                <TotemLine/>
                <Hand owner="current"/>
                <Hand owner="opp"/>
                <Pile/>
            </div>
        );
    }
}