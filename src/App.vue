<template>
  <div id="app">
    <section class="wrapper">
      <Header/>

      <main>
        <transition name="router">
          <router-view name="view"></router-view>
        </transition>

        <router-view name="modal"></router-view>
      </main>

      <Footer :year="copyrightYear"/>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import Header from './components/_common/Header.vue';
import Project from './components/_common/Projects.vue';
import Footer from './components/_common/Footer.vue';
import Modal from './components/_common/Modal.vue';

import { mapGetters } from 'vuex';

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
  methods: {
    getCurrentYear: function () {

      let d = new Date(),
          y = d.getFullYear();

      return y;

    }
  },
  data () {
    return {
      copyrightYear: this.getCurrentYear()
    }
  },
  computed: {
    ...mapGetters([
      'filteredProjects'
    ])
  }
}
</script>
