import React, {Component} from 'react';
import BreadCrumb from './breadcrumb';
import OnlineTimer from './online_timer';
import FinishButton from './finish_button';
import TimeSummary from './time_summary';
import Form from './form.js';

//how to pass props to {props.children} http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

export default class App extends Component {
    constructor(props) {
        super(props);
        this.visitTimesSummary = {
          personalDetails: null,
          address: null,
          contact: null
        };
        this.updateVisitTime = this.updateVisitTime.bind(this);
    }
    render() {
        const pathData = this.getPathRelatedData(this.props.location.pathname);
        const form = React.Children.map(this.props.children, child => {
            if (child.type.name === "Form") {
                return <Form key={pathData.form.key} data={pathData.form} updateTimeSummary={this.updateVisitTime}/>
            }
            return child;
        })

        return (
            <div>
                <div className="row">
                    <div id="process-section" className="col-md-12">
                        <BreadCrumb isActive={pathData.breadCrumb}/>
                    </div>
                </div>
                <div className="row">
                    <div id="form-container" className="col-md-6">
                        {form}
                    </div>
                    <div id="summary" className="col-md-6">
                        <TimeSummary data = {this.visitTimesSummary}/>
                    </div>
                </div>
            </div>

        );
    }
    getPathRelatedData(path) {
        const data = {
            breadCrumb: {
                personalDetails: null,
                address: null,
                contacts: null,
                summary: null
            },
            form: {
                fields: [],
                redirectButtonUrl: null,
                key: null
            }
        };
        switch (path) {
            case '/':
                data.breadCrumb.personalDetails = "active";
                data.form.fields = ["ID Number", "First Name", "Last Name"];
                data.form.redirectButtonUrl = "/address"
                data.form.key = "personalDetails";

                break;
            case '/address':
                data.breadCrumb.address = "active";
                data.form.fields = ["Street", "City", "Country"];
                data.form.redirectButtonUrl = "/contact";
                data.form.key = "address";
                break;
            case '/contact':
                data.breadCrumb.contact = "active";
                data.form.fields = ["Phone", "E-Mail"];
                data.form.redirectButtonUrl = "summary";
                data.form.key = "contact";
        }
        return data;

    }

    updateVisitTime (prop,time) {
      this.visitTimesSummary[prop] = time;
    }

}
