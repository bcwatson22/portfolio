import Vue from 'vue';
import Router from 'vue-router';
import Projects from './../components/_common/Projects';
import Modal from './../components/_common/Modal';

// import { mapMutations } from 'vuex';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home'
    // },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      props: (route) => ({
        activeFilter: route.query.filter
        // projectDatabase: this.$store.commit('filterProjects', route.query.filter);
        // projectDatabase: projectDatabase
      })
    },
    {
      path: '/projects/:name',
      name: 'Project',
      component: Modal
    },
    { path: '*',
      redirect: '/projects'
    }
  ]
})
