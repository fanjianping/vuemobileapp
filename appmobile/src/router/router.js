import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main/Main.vue'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'
import Movie from '../views/Movie/Movie.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: Main,
        children: [{
            path: '/home',
            name: 'home',
            component: Home
        }, {
            path: '/movie',
            name: 'movie',
            component: Movie
        }, ]
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }]
})