import React, {Component} from 'react';
import {Link} from 'react-router';

class FinishButton extends React.Component {
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
          <Link to={this.props.redirectUrl} style = {this.style.a}>
          <button className="btn btn-primary" style={this.style.button} type="submit">
                    <span>{this.props.label}</span>
         </button>
       </Link>
        );
    }
}

export default FinishButton;
