import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Form from './components/form';
import SummaryView from './components/summary_view'

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Form}/>
        <Route path="address" component={Form}/>
        <Route path="contact" component={Form}/>
        <Route path="summary" component={SummaryView}/>
    </Route>
)
