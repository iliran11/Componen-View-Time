import React, { Component } from 'react';
import {Link} from 'react-router';
import OnlineTimer from './online_timer';

class AddressForm extends React.Component {
  handleSubmit() {}
  render () {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          <h3>Address</h3>
          <div className="form-group">
              <label>
                  Street
              </label>
              <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
              <label>
                  City
              </label>
              <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
              <label>
                  Country
              </label>
              <input type="text" className="form-control"/>
          </div>
          <Link to="contact" className="btn btn-primary">
              Go To Contact Details
          </Link>
      </form>
      <OnlineTimer/>
    </div>
    );
  }
}

export default AddressForm;
