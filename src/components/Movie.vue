<template lang="pug">
    .mainBox
        .container
            .movieInfo
                .movieInfo__list(v-for="movie in movieDetails" :key="movie.imdbID")
                    .movieInfo__details 
                        .movie__picture
                            img(:src="movie.Poster")
                        .movie__title {{movie.Title}}
                        .movie__year {{movie.Year}}
                        .movie__runTime {{movie.Runtime}}
                        .movie__actors {{movie.Actors}}
    </template>
<script>
import axios from 'axios'
export default {
    name: 'Movie',
    data() {
        return{
            movieDetails: [],
            idMovies: ''

        }
    },
    mounted(){
        axios
            .get('http://www.omdbapi.com/?apikey=8d840397&i=' + this.idMovies + '&Content-Type=application/json')
            .then(response => {
                console.log(response.data)
                this.movieDetails = response
                this.idMovies = response.data.imdbID
                console.log(response.data.imdbID)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
}
</script>

<style scoped>

</style>
