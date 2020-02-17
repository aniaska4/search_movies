import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.filmUrl = 'http://www.omdbapi.com/?apikey=8d840397&page=1&type=movie&Content-Type=application/json'
new Vue({
  render: h => h(App),
  router,
  axios
}).$mount('#app')
