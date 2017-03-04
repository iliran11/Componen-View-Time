import React, { Component } from 'react';

class TimeSummary extends React.Component {
  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Section Name</th>
            <th>Visit Time</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Peronal Details</td>
          <td>{this.props.data.personalDetails} Seconds</td>
        </tr>
        <tr>
          <td>Address </td>
          <td>{this.props.data.address} Seconds</td>
        </tr>
        <tr>
          <td>Contacts </td>
          <td>{this.props.data.contact} Seconds</td>
        </tr>
      </tbody>
      </table>
    );
  }
}

export default TimeSummary;
