import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    projects: {
      original: [
        {
          id: 1,
          title: 'Bing Jones',
          name: 'bing-jones',
          disciplines: ['Development', 'Design', 'Branding'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'http://bingjones.co.uk'
        },
        {
          id: 2,
          title: 'Member Centre',
          name: 'member-centre',
          disciplines: ['Development', 'Design'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 3,
          title: 'Furness Brothers',
          name: 'furness-brothers',
          disciplines: ['Design', 'Branding'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 4,
          title: 'RMD',
          name: 'rmd',
          disciplines: ['Design', 'Branding'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 5,
          title: 'Quality of Service',
          name: 'quality-of-service',
          disciplines: ['Development'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'https://www.plus.net/help/quality-of-service/'
        },
        {
          id: 6,
          title: 'Planet Vlog',
          name: 'planet-vlog',
          disciplines: ['Video'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 7,
          title: 'X Games',
          name: 'xgames',
          disciplines: ['Design'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 8,
          title: 'Back to Basics',
          name: 'basics',
          disciplines: ['Design'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        }
      ],
      filtered: []
    }
    // modal: {
    //   show: false,
    //   active: null
    // }
  },
  getters: {
    allProjects: state => state.projects.original,

    filteredProjects: state => state.projects.filtered.length ? state.projects.filtered : state.projects.original
    // modalShown: state => state.modal.show,
    // modalData: state => state.modal.active
  },
  mutations: {
    filterProjects (state, payload) {

      state.projects.filtered = state.projects.original.filter(project => JSON.stringify(project.disciplines).toLowerCase().indexOf(payload.toLowerCase()) > -1);

      // this.filteredProjects = this.originalProjects.filter(project => JSON.stringify(project.disciplines).toLowerCase().indexOf(filter.toLowerCase()) > -1);
    },
    restoreProjects (state) {

      state.projects.filtered = state.projects.original;

    }
    // openModal (state, payload) {
    //   state.modal.show = true;
    //   state.modal.active = payload;
    // },
    // closeModal (state) {
    //   state.modal.show = false;
    //   state.modal.active = null;
    // }
  },
  actions: {
    filterProjects (context, payload) {
      context.commit('filterProjects', payload);
    }
    // openModal (context, payload) {
    //   context.commit('openModal', payload);
    // }
  }
});
