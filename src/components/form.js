import React, {Component} from 'react';
import OnlineTimer from './online_timer';
import FinishButton from './finish_button.js';
import  {Route, IndexRoute} from 'react-router';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log (this.props);
        this.fields = this.props.data.fields.map((field) => {
            return (
                <div key={field} className="form-group">
                    <label>
                        {field}
                    </label>
                    <input type="text" className="form-control"/>
                </div>
            )
        })
        const dosomething = function (e) {
          e.preventDefault();

          console.log ("submiteted");
}
        return (
            <div>
                <form onSubmit= {dosomething} action='/address'>
                  {this.fields}
                  <OnlineTimer/>
                  <FinishButton redirectUrl={this.props.data.redirectUrl} label = {this.props.data.submitButtonText}/>
                </form>
            </div>
        )
    }
    componentWillMount() {
        this.mountingTime = new Date()
    }
    componentWillUnmount() {
        const visitTime = ((new Date()) - this.mountingTime)/1000;
        this.props.updateTimeSummary(this.props.data.key, visitTime);

    }
}

export default Form;
