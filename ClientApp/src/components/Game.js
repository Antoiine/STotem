import React, { Component } from 'react';
import {Board} from './Board';

import '../css/Board.css';

export class Game extends Component {
    render() {
        return (
            <div>
                <Board/>
            </div>
        );
    }
}