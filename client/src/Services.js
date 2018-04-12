import axios from 'axios'

class Services {
	getAllWorkoutlogs() {
		return axios({
			method: 'GET',
			url: '/api/workoutlogs',
			headers: {
      			'Authorization': localStorage.jwt
   			}
		})
	}

	getOneWorkoutlog(id) {
		return axios.get(`/api/workoutlogs/${id}`)
	}

	// createWorkoutlog(log) {
	// 	return axios({
	// 		method: 'POST',
	// 		url: '/api/workoutlogs'
	// 	})
	// }

	login(user_info) {
		return axios({
			method: 'POST',
			url: '/api/user_token',
			data: user_info
		})
	}
}

export default new Services();