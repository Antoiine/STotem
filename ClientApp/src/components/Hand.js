import React, { Component } from 'react';
import {Card} from './Card';

import '../css/Hand.css';

export class Hand extends Component {
    render() {
        const classesName =(this.props.owner || "") + "Hand hand";
        return (
            <div className={classesName}>
                <Card position="1" value="1"/>
                <Card position="2" value="2"/>
                <Card position="3" value="3"/>
                <Card position="4" value="4"/>
                <Card position="5" value="5"/>
                <Card position="6" value="6"/>
            </div>
        );
    }
}