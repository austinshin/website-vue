import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import About from '@/components/About'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/to-do',
      name: 'ToDo',
      component: Test
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
