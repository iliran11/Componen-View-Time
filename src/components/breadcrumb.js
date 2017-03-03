import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import _ from 'lodash';

class BreadCrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
    render() {
        return (
            <div>
                <ul id="breadcrumb">
                    <li className={this.props.isActive.personalDetails}>
                        <a href="#">Personal Details</a>
                    </li>
                    <li className={this.props.isActive.address}>
                        <a href="#">Address</a>
                    </li>
                    <li className={this.props.isActive.contact}>
                        <a href="">Contacts</a>
                    </li>
                    <li className="">
                        <a href="">Summary</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default BreadCrumb;
