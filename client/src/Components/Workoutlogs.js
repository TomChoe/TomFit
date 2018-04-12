import React, { Component } from 'react';
import Services from '../Services';
import { Link } from 'react-router-dom';
import Log from './Log';

export default class Workoutlogs extends Component {
	constructor() {
		super()
		this.state = {
			apiDataLoaded: false,
			apiData: null
		}
	}

	componentDidMount() {
		Services.getAllWorkoutlogs()
			.then(logs => {
				this.setState({
					apiDataLoaded: true,
					apiData: logs.data
				})
			})
			.catch(err => {
				console.log('error in logs', err)
			})
	}

	showLogs() {
		return this.state.apiData.map(
			log => <Log {...log} key={log.id} />
		)
	}

	render() {
		return (
			<div>
				{this.state.apiData ? this.showLogs() : (<h1>Loading...</h1>)}
			</div>
		)
	}
}