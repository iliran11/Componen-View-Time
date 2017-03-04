import React, {Component} from 'react';
import OnlineTimer from './online_timer';
import FinishButton from './finish_button.js'

class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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
        return (
            <div>
                <form>{this.fields}</form>
                <OnlineTimer/>
                <FinishButton redirectButtonUrl={this.props.data.redirectButtonUrl}/>
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
