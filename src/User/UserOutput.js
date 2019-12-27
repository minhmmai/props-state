import React, { Component } from 'react';
import './User.css';

class Output extends Component {
    render() {
        return (
            <div className='output'>
                <p>This is the {this.props.order} output component</p>
                <p>{this.props.text}</p>
                <p>{this.props.userName}</p>
            </div>
        )

    }
}

export default Output