import React, { Component } from 'react';
import './User.css';

class Output extends Component {
    render() {
        return (
            <div className='output'>
            <p>{this.props.text} {this.props.userName}</p>
            </div>
        )          
        
    }
}

export default Output