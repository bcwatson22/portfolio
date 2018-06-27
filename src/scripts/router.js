import Vue from 'vue';
import Router from 'vue-router';
import Modal from './../components/_common/Modal';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/projects/:name',
      name: 'Projects',
      component: Modal
    },
    { path: '*',
      redirect: '/'
    }
  ]
})
