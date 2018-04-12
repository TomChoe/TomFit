import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App'
import Workoutlogs from './Components/Workoutlogs';

export default (
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/workoutlogs" component={Workoutlogs} />
		</Switch>
	</Router>
)