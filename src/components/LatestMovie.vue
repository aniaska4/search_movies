<template lang="pug">
  .mainBox
    .container
      .movieLists
        .movieLists__movie(v-for="item in allMovies" :key="item.imdbID" @click="movie(item.imdbID)")
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
  name: 'LatestMovie',
  data() {
    return {
      allMovies: [],
    }
  },
  mounted () {
  axios
    .get('http://www.omdbapi.com/?s=mummy&apikey=8d840397&page=1&type=movie&Content-Type=application/json')
    .then(response => {
      console.log(response)
      this.allMovies = response.data.Search
    })
    .catch(error => {
      console.log(error)
    })
},
methods: {
  movie(id){
    this.$router.push('/movie/' + id)
  }
}
}
</script>

<style scoped>
.container{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}

.movieLists{
  display: flex;
  flex-wrap: wrap
}

.movieLists__movie{
  margin: 10px;
}

img{
  width: 300px;
  height: 450px;
}
.movieLists__movie__details{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.movieLists__movie-title{
  /* font-weight: 600 */
}
</style>
