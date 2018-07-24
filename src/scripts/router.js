import Vue from 'vue';
import Router from 'vue-router';
import Projects from './../components/_common/Projects';
import Modal from './../components/_common/Modal';
import Contact from './../components/_common/Contact';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/projects',
      name: 'Projects',
      components: {
        view: Projects
      },
      props: {
        view: (route) => ({
          activeFilter: route.query.filter
        })
      }
    },
    {
      path: '/projects/:name',
      name: 'Project',
      components: {
        view: Projects,
        modal: Modal
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      components: {
        view: Contact
      }
    },
    { path: '*',
      redirect: '/projects'
    }
  ]
});

router.beforeEach((to, from, next) => {

    let newFilter = to.query.filter;

    if (newFilter) {

      switch (newFilter) {

        case 'development':
        case 'design':
        case 'branding':
        case 'video':
          next();
          break;

        default:
          next('/');
          break;

      }

    } else {

      next();

    }

});

export default router;
