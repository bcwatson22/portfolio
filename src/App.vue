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

      <CookieBanner v-if="cookieBanner"/>
    </section>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue';

  import Header from './components/_common/Header.vue';
  import Project from './components/_common/Projects.vue';
  import Footer from './components/_common/Footer.vue';
  import Modal from './components/_common/Modal.vue';
  import CookieBanner from './components/_common/CookieBanner.vue';

  import { mapGetters } from 'vuex';

  import mixins from './scripts/mixins.js';

  // IntersectionObserver polyfill
  require('intersection-observer');

  export default {
    name: 'app',
    components: {
      // HelloWorld,
      Header,
      Project,
      Footer,
      Modal,
      CookieBanner
    },
    mixins: [mixins],
    methods: {
      getCurrentYear: function () {

        let d = new Date(),
            y = d.getFullYear();

        return y;

      },
      checkForCookie: function () {

        let showBanner = (this.$cookie.get('billy-watson')) ? false : true;

        return showBanner;

      }
    },
    data () {
      return {
        copyrightYear: this.getCurrentYear(),
        cookieBanner: this.checkForCookie()
      }
    },
    mounted () {

      let $root = document.getElementById('app'),
          $banner = $root.querySelectorAll('.cookie-banner')[0],
          height = '0';

      if ($banner) {

        height = $banner.offsetHeight.toString();

        $root.style.paddingBottom = height + 'px';

      }

    },
    computed: {
      ...mapGetters([
        'filteredProjects'
      ])
    }
  }
</script>
