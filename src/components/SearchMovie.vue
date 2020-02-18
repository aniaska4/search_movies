<template lang="pug">
  .mainBox
    .container
      .movieLists
        .movieLists__movie(v-for="item in allMovies" :key="item.imdbID" @click="showMovie(item.imdbID)")
          .movieLists__movie-img
            img(:src="item.Poster")
          .movieLists__movie__details
            .movieLists__movie-title Title: {{item.Title}}
            .movieLists__movie-year Year: {{item.Year}}
            .movieLists__movie-type Type: {{item.Type}}
            .movieLists__movie-imdbID {{item.imdbID}} 
</template>
<script>
import axios from 'axios'
export default {
    props: ['name'],
    name: 'LatestMovie',
  data() {
    return {
      allMovies: [],
      idMovies: '',      
    }
  },
  mounted () {
  axios
    .get('http://www.omdbapi.com/?apikey=8d840397&Content-Type=application/json' + '&s=' + this.name)
    .then(response => {
      console.log(response)
      this.allMovies = response.data.Search
      this.idMovies = response.data.Search.imdbID
    })
    .catch(error => {
      console.log(error)
    })
},
methods: {
  showMovie(id){
    this.$router.push('/movie/' + id)
  }
}
}
</script>
</script>