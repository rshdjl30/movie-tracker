import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import MovieView from '../views/MovieView.vue'
import CreateMovieView from '../views/CreateMovieView.vue'
import LookMovieView from '../views/LookMovieView.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MovieView
  },
  {
    path: '/movies/create',
    name: 'movies-create',
    component: CreateMovieView
  },
  {
    path: '/movies/:movieId',
    name: 'movie',
    component: LookMovieView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
