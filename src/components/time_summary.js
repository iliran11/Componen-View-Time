import React, {Component} from 'react';

class TimeSummary extends React.Component {
    render() {
        const personalDetails = this.props.data.personalDetails;
        const address = this.props.data.address;
        const contact = this.props.data.contact;
        return (
            <div>
                <h1>Summary Table</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Section Name</th>
                            <th>Visit Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className = {personalDetails.class}>
                            <td>Peronal Details</td>
                            <td>{personalDetails.rowText}</td>
                        </tr>
                        <tr className = {address.class}>
                            <td>Address</td>
                            <td>{address.rowText}</td>
                        </tr>
                        <tr className = {contact.class}>
                            <td>Contacts</td>
                            <td>{contact.rowText}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TimeSummary;
