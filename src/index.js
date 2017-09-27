import React from 'react';
import { render } from 'react-dom';
import { App } from './components/app';

window.React = React;

render(
	<App />,
	document.getElementById('react-container')
);

// render(
// 	<SkiDayCount />,
// 	document.getElementById('react-container')
// );