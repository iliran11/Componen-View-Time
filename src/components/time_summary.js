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
        <tr>
          <td>Peronal Details</td>
          <td>84 Seconds</td>
        </tr>
        <tr>
          <td>Address </td>
          <td>72 Seconds</td>
        </tr>
        <tr>
          <td>Contacts </td>
          <td>42 Seconds</td>
        </tr>
      </table>
    );
  }
}

export default TimeSummary;
