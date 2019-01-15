import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import archive from './views/Archive'
import singlePost from './views/SinglePost'
import FQAs from './views/FQAS'
import SingleFQAs from './views/SingleFQAs'
import contact from './views/Contact'
Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/Archive',
      name: 'archive',
      component: archive
    },
    {
      path: '/SinglePost',
      name: 'singlePost',
      component: singlePost
    },
    {
      path: '/FQAs',
      name: 'FQAs',
      component: FQAs
    },
    {
      path: '/SingleFQAs',
      name: 'SingleFQAs',
      component: SingleFQAs
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
