<template>
  <div id="app">
    <section class="wrapper">

      <Header/>

      <!-- <img src="./assets/images/global/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- <p><strong>{{modalShown}}</strong>. Modal active: <strong>{{modalData}}</strong></p>
        <button @click="deactivateModal(true)">Close</button> -->

      <main>
        <Project
          v-for="project of projects"
            :key="project.id"
            :title="project.title"
            :name="project.name"
            :disciplines="project.disciplines"
            :blurb="project.blurb"
            :link="project.link"
            :data="project"
          />
      </main>

      <Footer :year="copyrightYear"/>

      <transition name="popup">
        <router-view :projectData="projects"></router-view>
      </transition>

    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import Header from './components/_common/Header.vue';
import Project from './components/_common/Project.vue';
import Footer from './components/_common/Footer.vue';
import Modal from './components/_common/Modal.vue';

import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

import mixins from './scripts/mixins.js';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Project,
    Footer,
    Modal
  },
  mixins: [mixins],
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Bing Jones',
          name: 'bing-jones',
          disciplines: ['development', 'design', 'branding'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'http://bingjones.co.uk'
        },
        {
          id: 2,
          title: 'Member Centre',
          name: 'member-centre',
          disciplines: ['development', 'design'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 3,
          title: 'Furness Brothers',
          name: 'furness-brothers',
          disciplines: ['design', 'branding'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 4,
          title: 'RMD',
          name: 'rmd',
          disciplines: ['design', 'branding'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 5,
          title: 'Quality of Service',
          name: 'quality-of-service',
          disciplines: ['development'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'https://www.plus.net/help/quality-of-service/'
        },
        {
          id: 6,
          title: 'Planet Vlog',
          name: 'planet-vlog',
          disciplines: ['video'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 7,
          title: 'X Games',
          name: 'xgames',
          disciplines: ['design'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 8,
          title: 'Back to Basics',
          name: 'basics',
          disciplines: ['design'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        }
      ],
      copyrightYear: this.getCurrentYear()
    }
  },
  computed: {
    ...mapGetters([
      // Mounts the "safelyStoredNumber" getter to the scope of your component.
      'modalShown',
      'modalData'
    ])
  },
  methods: {
    getCurrentYear: function () {

      let d = new Date(),
          y = d.getFullYear();

      return y;

    },
    ...mapMutations([
      // Mounts the "incrementStoredNumber" mutation to `this.incrementStoredNumber()`.
      'closeModal'
    ])
  }
}
</script>
