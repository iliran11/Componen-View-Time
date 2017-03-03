import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import BreadCrumb from './components/breadcrumb';
import Form from './components/form.js';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Form}/>
        <Route path="address" component={Form}/>
        <Route path="contact" component={Form}/>
    </Route>
)
