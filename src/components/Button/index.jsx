import { Component } from 'react';

import './styles.css'

export class Button extends Component {
    render(){
    const {text, eventOnClick, disabled} = this.props;


        return (
            <button className="button" 
            disabled = {disabled}
            onClick={eventOnClick}>
                {text}
            </button>
        )

    }
}