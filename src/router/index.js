import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/dashboard'
import projects from '../views/projects'
import team from '../views/team';
import home from '../views/home';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/team',
    name: 'team',
    component: team
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
]

const router = new VueRouter({
  routes
})

export default router