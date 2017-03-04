import React, {Component} from 'react';
import BreadCrumb from './breadcrumb';
import OnlineTimer from './online_timer';
import FinishButton from './finish_button';
import TimeSummary from './time_summary';
import FinishLine from './finish_line';
import Form from './form.js';

//how to pass props to {props.children} http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

export default class App extends Component {
    constructor(props) {
        super(props);
        this.updateVisitTimes = this.updateVisitTimes.bind(this);
        this.visitTimesFactory = this.visitTimesFactory.bind(this);
        this.visitTimesFactory();
    }
    render() {
        const pathData = this.getPathRelatedData(this.props.location.pathname);
        const form = React.Children.map(this.props.children, child => {
            if (child.type.name === "Form") {
                return <Form key={pathData.form.key} data={pathData.form} updateTimeSummary={this.updateVisitTimes}/>
            }
            if (child.type.name === "FinishLine") {
                return <FinishLine resetTimesSummary={this.visitTimesFactory} timesSummary={this.visitTimesSummary}/>
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
                        <TimeSummary data={this.visitTimesSummary}/>
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
                redirectUrl: null,
                key: null,
                submitButtonText: null,
                timer: true
            }
        };
        switch (path) {
            case '/':
                data.breadCrumb.personalDetails = "active";
                data.form.fields = ["ID Number", "First Name", "Last Name"];
                data.form.redirectUrl = "/address"
                data.form.key = "personalDetails";
                data.form.submitButtonText = "Submit";

                break;
            case '/address':
                data.breadCrumb.address = "active";
                data.form.fields = ["Street", "City", "Country"];
                data.form.redirectUrl = "/contact";
                data.form.key = "address";
                data.form.submitButtonText = "Submit";
                break;
            case '/contact':
                data.breadCrumb.contact = "active";
                data.form.fields = ["Phone", "E-Mail"];
                data.form.redirectUrl = "/summary";
                data.form.key = "contact";
                data.form.submitButtonText = "Thank you! Please Finish";
                break;
            case '/summary':
                data.breadCrumb.summary = "active";
        }
        return data;

    }

    updateVisitTimes(prop, time) {
        this.visitTimesSummary[prop].rowText = time.toPrecision(2) + ' Seconds';
        this.visitTimesSummary[prop].class = 'success';
    }
    visitTimesFactory() {
        const visitTimeRow = function() {
            return {rowText: '', class: ''}
        }
        this.visitTimesSummary = {
            personalDetails: new visitTimeRow(),
            address: new visitTimeRow(),
            contact: new visitTimeRow()
        };
    }

}
