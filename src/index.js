import React from 'react';
import { render } from 'react-dom';
import { App } from './components/app';
import { ErrorPage } from './components/errorPage';
import { Router, Route, hashHistory } from 'react-router';
import './stylesheets/ui.scss';
import './stylesheets/index.scss';

window.React = React;

render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/add-day" component={App} />
		<Route path="/list-days" component={App} >
			<Route path=":filterExp" component={App} />
		</Route>
		<Route path="*" component={ErrorPage} />
	</Router> ,
	document.getElementById('react-container')
);

// render(
// 	<SkiDayCount />,
// 	document.getElementById('react-container')
// );