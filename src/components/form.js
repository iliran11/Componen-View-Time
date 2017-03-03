import React, {Component} from 'react';
import OnlineTimer from './online_timer';
import FinishButton from './finish_button.js'

class Form extends React.Component {
    handleSubmit() {}
    render() {
        this.fields = this.props.fields.map((field) => {
            return (
                <div key = {field} className="form-group">
                    <label>
                        {field}
                    </label>
                    <input type="text" className="form-control"/>
                </div>
            )
        })
        return (
            <div>
                <form>{this.fields}</form>
                <OnlineTimer/>
                <FinishButton redirectButtonUrl = {this.props.redirectButtonUrl}/>
            </div>
        )
    }
    componentWillMount() {
    }
}

export default Form;
