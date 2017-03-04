import React, {Component} from 'react';
import FinishButton from './finish_button';

const checkedStyle = {
  fontSize: '200px',
  color: 'green'
}
const divStyle = {
  textAlign: 'center',
}
export default function FinishLine(props) {
  props.resetTimesSummary();
    return (
        <div style={divStyle}>
            <i className="fa fa-check" aria-hidden="true" style={checkedStyle}></i>
            <FinishButton redirectUrl = '/' label = "Start Again!"/>
        </div>
    )
}
