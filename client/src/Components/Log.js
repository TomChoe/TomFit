import React from 'react';
import { Link } from 'react-router-dom';

const Log = (props) => {
	return (
		<div>
			<h4>{props.exercise}</h4>
			<h5>{new Date(props.created_at).toDateString()}</h5>
			<p><Link to={`/workoutlogs/${props.id}`}>Click for more</Link></p>
		</div>
	)
}

export default Log;