import React, {Component} from 'react';
import {Link} from 'react-router';
import OnlineTimer from './online_timer';

class PersonalDetailsForm extends React.Component {
    handleSubmit() {}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Submit Your Personal Details</h3>
                    <div className="form-group">
                        <label>
                            ID Number
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            First Name
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Last Name
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <Link to="address" className="btn btn-primary">
                        Go To Address Details
                    </Link>
                </form>
                <OnlineTimer/>
            </div>
        );
    }
}

export default PersonalDetailsForm;
