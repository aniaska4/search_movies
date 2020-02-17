<template lang="pug">
  .mainBox
    .container
      .movieLists
        .movieLists__movie(v-for="item in allMovies" :key="item.imdbID" @click="showMovie")
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
      idMovies: ''
    }
  },
  mounted () {
  axios
    .get('http://www.omdbapi.com/?s=' + this.name + '&apikey=8d840397&page=1&type=movie&Content-Type=application/json')
    .then(response => {
      console.log(response)
      this.allMovies = response.data.Search
      this.idMovies = response.data.imdbID
    })
    .catch(error => {
      console.log(error)
    })
},
methods: {
  showMovie(){
    this.$router.push('/movie/' + this.idMovies)
  }
}
}
</script>
</script>