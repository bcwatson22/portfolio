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
          disciplines: {
            primary: 'Development',
            list: ['Development', 'Design', 'Branding'],
          },
          blurb: 'Portrait gallery design and development project for Sheffield-based painter. Site built in Angular 4; featuring progressive image loading, meta-based animations and randomised content based on promises and behaviour subjects.',
          link: 'http://bingjones.co.uk'
        },
        {
          id: 2,
          title: 'Member Centre',
          name: 'member-centre',
          disciplines: {
            primary: 'Development',
            list: ['Development', 'Design'],
          },
          blurb: 'Rapid prototype Member Centre built for Plusnet, vastly modernising their current setup. Project developed in Angular 4 and features search functionality, broadband speed test journey and a user tested, data-driven UI.',
          link: 'https://bcwatson22.github.io/member/'
        },
        {
          id: 9,
          title: 'Pyramid SK8',
          name: 'pyramid-sk8',
          disciplines: {
            primary: 'Branding',
            list: ['Design', 'Branding'],
          },
          blurb: 'Logo and branding project for Stockport-based skateboarding and streetwear label. Brief included inclusion of local postcode and "moody-looking" clouds.',
          link: 'vector'
        },
        {
          id: 5,
          title: 'Quality of Service',
          name: 'quality-of-service',
          disciplines: {
            primary: 'Development',
            list: ['Development'],
          },
          blurb: 'New page developed for Plusnet site, using animated graphs and counters to visualise results of quarterly satisfaction surveys. Written using Handlebars, with variable axes and transition delays. Head of Digital proclaimed it "best page on\'t site."',
          link: 'https://www.plus.net/help/quality-of-service/'
        },
        {
          id: 10,
          title: 'Red Eric Studios',
          name: 'red-eric',
          disciplines: {
            primary: 'Design',
            list: ['Design'],
          },
          blurb: 'Article design for Leeds creative magazine, profiling independent art space and recording studio. Created using InDesign, with image processing in Photoshop and vector graphics in Illustrator.',
          link: 'raster'
        },
        {
          id: 3,
          title: 'Furness Brothers',
          name: 'furness-brothers',
          disciplines: {
            primary: 'Branding',
            list: ['Design', 'Branding'],
          },
          blurb: 'Logo design and branding project for existing business. Project included modern recreation of existing logo from low-resolution scan, achieved in Illustrator using masks and live trace.',
          link: 'vector'
        },
        {
          id: 4,
          title: 'RMD',
          name: 'rmd',
          disciplines: {
            primary: 'Branding',
            list: ['Design', 'Branding'],
          },
          blurb: 'Corporate identity created for new business in the industrial sector, working from a brief that required eco-friendly connotations. All vector elements created in Illustrator.',
          link: 'vector'
        },
        {
          id: 8,
          title: 'Back to Basics',
          name: 'basics',
          disciplines: {
            primary: 'Design',
            list: ['Design'],
          },
          blurb: 'Layout design for Fiyah! magazine article on Back to Basics; the longest running club night in the world. Created in InDesign, with Photoshop used for image manipulation.',
          link: 'raster'
        },
        {
          id: 7,
          title: 'X-Games',
          name: 'x-games',
          disciplines: {
            primary: 'Design',
            list: ['Design'],
          },
          blurb: 'Article design for TBB magazine outlining X-Games - an annual extreme sports event that takes place in Rhode Island. InDesign used for layout and graphic design.',
          link: 'raster'
        },
        {
          id: 6,
          title: 'Planet Vlog',
          name: 'planet-vlog',
          disciplines: {
            primary: 'Video',
            list: ['Video'],
          },
          blurb: 'Video blog of backpacking trip through Asia. Concept was to capture one second of video every day, which creates a diverse montage when stitched together.',
          link: 'embed'
        }
      ],
      filtered: [],
      activeFilter: false
    }
  },
  getters: {
    allProjects: state => state.projects.original,

    filteredProjects: state => state.projects.filtered.length ? state.projects.filtered : state.projects.original,

    currentFilter: state => state.projects.activeFilter
  },
  mutations: {
    filterProjects (state, payload) {

      state.projects.filtered = state.projects.original.filter(project => JSON.stringify(project.disciplines).toLowerCase().indexOf(payload.toLowerCase()) > -1);

      state.projects.activeFilter = payload;

    },
    restoreProjects (state) {

      state.projects.filtered = state.projects.original;

      state.projects.activeFilter = false;

    }
  },
  actions: {
    filterProjects (context, payload) {

      context.commit('filterProjects', payload);

    },
    restoreProjects (context) {

      context.commit('restoreProjects');

    }
  }
});
