import axios from 'axios'

export default {
    fetchMovies (name) {
        return axios.get('&s=' + name)
                    .then(response => {
                        return response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
    },

    fetchSingleMovie (id) {
        return axios.get('&i' + id)
                    .then(response => {
                        return response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
    }
}