import Vue from 'vue';
import Router from 'vue-router';
import Projects from './../components/_common/Projects';
import Modal from './../components/_common/Modal';
import Contact from './../components/_common/Contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      props: (route) => ({
        activeFilter: route.query.filter
      })
    },
    {
      path: '/projects/:name',
      name: 'Project',
      component: Modal
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    { path: '*',
      redirect: '/projects'
    }
  ]
})
