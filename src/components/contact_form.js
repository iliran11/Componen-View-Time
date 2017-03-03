import React, {Component} from 'react';
import {Link} from 'react';
import OnlineTimer from './online_timer';

class ContactForm extends React.Component {
    handleSubmit() {}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>
                        hello
                    </h3>
                    <div className="form-group">
                        <label>
                            Phone
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>
                            E-Mail
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                </form>
                <OnlineTimer/>
            </div>

        );
    }
}

export default ContactForm;
