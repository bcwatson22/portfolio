<template>
  <div id="app">
    <section class="wrapper">
      <Header/>
      <!-- <img src="./assets/images/global/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <p><strong>{{modalShown}}</strong>. Modal active: <strong>{{modalData}}</strong></p>
        <button @click="deactivateModal(true)">Close</button>
      <main>
        <Project
          v-for="project of projects"
          v-bind:key="project.id"
          v-bind:title="project.title"
          v-bind:name="project.name"
          v-bind:disciplines="project.disciplines"
          v-bind:blurb="project.blurb"
          v-bind:link="project.link"
          v-bind:data="project"
          />
      </main>
      <Footer v-bind:year="copyrightYear"/>
      <!-- <Modal
        v-if="showModal"
        /> -->

      <transition name="popup">
        <section class="modal" v-if="modalShown">
          <div class="mask" @click.self="deactivateModal(true)">
            <div class="container">
              <img :src="require('./assets/images/projects/' + modalData.name + '.jpg')">
              <h2>{{modalData.title}}</h2>
              <p>{{modalData.blurb}}</p>
              <button @click="deactivateModal(true)">Close</button>
            </div>
          </div>
        </section>
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
  mounted () {

    // setTimeout(function () {
    //
    //   window.addEventListener("popstate", function (event) {
    //     let state = event.state;
    //
    //     if (state !== 'home') {
    //
    //       console.log('activate ' + state.name);
    //
    //       this.activateModal(event, state);
    //
    //     } else {
    //
    //       console.log('deactivate!');
    //
    //       this.deactivateModal(false);
    //
    //     }
    //   }, false);
    //
    //   // this.onPopState();
    //
    //
    // }, 5000);

    // window.addEventListener("popstate", function (event) {
    //   let state = event.state;
    //
    //   if (state !== 'home') {
    //
    //     console.log('activate ' + state.name);
    //
    //     this.activateModal(event, state);
    //
    //   }
    // }, false);

    // window.onpopstate = function (event) {
    //
    //   let state = event.state;
    //
    //   if (state !== 'home') {
    //
    //     console.log('activate ' + state.name);
    //
    //     this.activateModal(event, state);
    //
    //   } else {
    //
    //
    //
    //   }

    //  };

    // this.onPopState();

  },
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
          disciplines: ['development'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 3,
          title: 'Furness Brothers',
          name: 'furness-brothers',
          disciplines: ['branding'],
          blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          link: 'modal'
        },
        {
          id: 4,
          title: 'RMD',
          name: 'rmd',
          disciplines: ['branding'],
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

<!-- <style lang="scss">
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
  }
</style> -->
