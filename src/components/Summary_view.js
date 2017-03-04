import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Form from './form.js';


const checkedStyle = {
  fontSize: '200px',
  color: 'green'
}
const divStyle = {
  textAlign: 'center',
}
const formData = {
  redirectUrl: '/',
  fields: [],
  key: null,
  submitButtonText:"let's start again!",
  timer:false
}
export default function SummaryView(props) {
  props.resetTimesSummary();
    return (
        <div style={divStyle}>
            <i className="fa fa-check" aria-hidden="true" style={checkedStyle}></i>
            <Form data = {formData}/>
        </div>
    )
}
