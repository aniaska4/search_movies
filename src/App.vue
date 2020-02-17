<template>
<div>
  <div>
    <div class="search">
      <label>
        <input v-model="searchTitle">
      </label>
      <button @click="showMovies()">Search movie</button>
    </div>
  </div>
 <router-view></router-view>
 </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      searchTitle: ''
    }
  },
  methods: {
    showMovies(){
      this.$router.push('/search/' + this.searchTitle)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.search{
  margin-bottom: 20px;
}
</style>
te