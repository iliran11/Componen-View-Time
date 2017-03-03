import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import BreadCrumb from './components/breadcrumb';
import PersonalDetails from './components/personal_details_form';
import Address from './components/address_form';
import contactForm from './components/contact_form';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={PersonalDetails}/>
        <Route path="address" component={Address}/>
        <Route path="contact" component={contactForm}/>
    </Route>
)
