import React, {Component} from 'react';
import BreadCrumb from './breadcrumb';
import OnlineTimer from './online_timer';
import FinishButton from './finish_button';
import TimeSummary from './time_summary';

//how to pass props to {props.children} http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log ("path object", this.parseUrl(this.props.location.pathname))
        return (
            <div>
                <BreadCrumb isActive={this.parseUrl(this.props.location.pathname)}/>
                {this.props.children}
                <FinishButton/>
                <TimeSummary/>
            </div>
        );
    }
    parseUrl(path) {
        const breadcrumbState = {
            personalDetails: null,
            address: null,
            contacts: null,
            summary: null
        };
        switch (path) {
            case '/':
                breadcrumbState.personalDetails = "active";
                break;
            case 'address':
                breadcrumbState.address = "active";
                break;
            case 'contact':
                breadcrumbState.contact = "active";
        }
        return breadcrumbState;

    }

}
