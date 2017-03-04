import React, {Component} from 'react';
import OnlineTimer from './online_timer';
import FinishButton from './finish_button.js';
import {Route, IndexRoute} from 'react-router';
import {browserHistory} from 'react-router';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.defaults = {
            fields: [],
            redirectUrl: '/',
            key: (new Date()).getTime(),
            submitButtonText: 'Default',
            timer: true
        }
        this.styles = {
            errorMessage: {
                fontWeight: 'bold',
                fontSize: '200%',
                color: 'red'
            }
        }
        this.options = $.extend({}, this.defaults, this.props.data);
        this.options.validation = this.validationFactory(this.options.redirectUrl).bind(this);
    }
    render() {
        this.fields = this.options.fields.map((field) => {
            return (
                <div key={field} className="form-group">
                    <label>
                        {field}
                    </label>
                    <input type="text" className="form-control" ref={field}/>
                </div>
            )
        })
        return (
            <div>
                <form onSubmit={this.options.validation}>
                    <div>
                        {this.fields}
                    </div>
                    <span ref="error-message" style={this.styles.errorMessage}/>
                    <OnlineTimer display={this.options.timer}/>
                    <FinishButton label={this.options.submitButtonText}/>
                </form>
            </div>
        )
    }
    componentWillMount() {
        if (this.options.timer)
            this.mountingTime = new Date()
    }
    componentWillUnmount() {
        if (this.options.timer) {

            const visitTime = (((new Date()) - this.mountingTime) / 1000);
            this.props.updateTimeSummary(this.options.key, visitTime);
        }
    }
    validationFactory(redirectUrl) {
        return function(e) {
            e.preventDefault();
            let valid = true;
            const refs = this.refs;
            this.options.fields.forEach((element) => {
                if (refs[element].value === "") {
                    valid = false;
                }
            })
            if (valid) {
                browserHistory.push(redirectUrl);
            } else {
                refs['error-message'].textContent = "Please Fill ALL Fields";
            }
        }
    }
}

export default Form;
