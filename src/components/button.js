import React, {Component} from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            button: {
                width: '100%',
                marginTop: '10px'
            },
            a: {
                color: 'white',
                width:'100%'
            }
        }
    }
    render() {
        return (
          <button  onClick = {this.props.onClick} className="btn btn-primary" style={this.style.button} type="submit">
                    <span>{this.props.label}</span>
         </button>
        );
    }

}

export default Button;
