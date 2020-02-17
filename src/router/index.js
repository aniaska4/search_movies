import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'
import Movie from '@/components/Movie'
import SearchMovie from '@/components/SearchMovie'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'LatestMovie',
        component: LatestMovie
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        props: true,
        mode: 'history',
        component: Movie
      },
      {
        path: '/search/:name',
        name: 'SearchMovie',
        mode: 'history',
        props: true,
        component: SearchMovie
      }
  ]
})