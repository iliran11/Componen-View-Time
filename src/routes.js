import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import BreadCrumb from './components/breadcrumb';
import TimeSummary from './components/time_summary';
import Form from './components/form';
import FinishLine from './components/finish_line'

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Form}/>
        <Route path="address" component={Form}/>
        <Route path="contact" component={Form}/>
        <Route path="summary" component={FinishLine}/>
    </Route>
)
