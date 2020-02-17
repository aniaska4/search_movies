<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LatestMovie',
  data() {
    return {

    }
  },
  mounted () {
  axios
    .get('http://www.omdbapi.com/?s=mummy&apikey=8d840397&page=1&type=movie&Content-Type=application/json')
    .then(response => {
      console.log(response)
      this.wholeResponse = response.data.Search
    })
    .catch(error => {
      console.log(error)
    })
}
}
</script>

<style scoped>
</style>
