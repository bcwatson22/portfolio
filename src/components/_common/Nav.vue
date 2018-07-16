<template>
  <nav>
    <ul class="disciplines">
      <li data-indicate="Development">
        <router-link :to="currentFilter === 'development' ? '/projects' : { path: 'projects', query: { filter: 'development' }}" class="icon scaled development" :class="currentFilter === 'development' ? 'active' : ''"></router-link>
      </li>
      <li data-indicate="Design">
        <router-link :to="currentFilter === 'design' ? '/projects' : { path: 'projects', query: { filter: 'design' }}" class="icon scaled design" :class="currentFilter === 'design' ? 'active' : ''"></router-link>
      </li>
      <li data-indicate="Branding">
        <router-link :to="currentFilter === 'branding' ? '/projects' : { path: 'projects', query: { filter: 'branding' }}" class="icon scaled branding" :class="currentFilter === 'branding' ? 'active' : ''"></router-link>
      </li>
      <li data-indicate="Video">
        <router-link :to="currentFilter === 'video' ? '/projects' : { path: 'projects', query: { filter: 'video' }}" class="icon scaled video" :class="currentFilter === 'video' ? 'active' : ''"></router-link>
      </li>
      <li data-indicate="CV">
        <a href="/cv.pdf" @click.prevent="linkTo($event, true)" class="icon scaled cv"></a>
      </li>
      <li data-indicate="Contact">
        <a href="/contact" @click.prevent="linkTo($event, false)" class="icon scaled contact" :class="this.$router.currentRoute.path.substr(1) === 'contact' ? 'active' : ''"></a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Nav',
    computed: {
      ...mapGetters([
        // Mounts the "safelyStoredNumber" getter to the scope of your component.
        'currentFilter'
      ])
    },
    methods: {
      linkTo: function (event, file) {

        let href = event ? event.currentTarget.getAttribute('href') : '';

        if (file) {

          window.open(href, '_blank');

        } else {

          if (this.currentFilter) this.$store.commit('restoreProjects');

          this.$router.push(href);

        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './../../assets/styles/sass/_variables.scss';

  nav {
    width: 100%;
    margin-top: 15px;
    min-height: 75px;
    position: relative;

    &:hover,
    &:focus {
      .icon {
        transform: scale(1);

        &:before {
          opacity: 1;
        }
      }
    }

    ul {
      display: flex;
      // justify-content: space-around;
      justify-content: space-between;
    }

    li {
      &:after {
        left: 50%;
        transform: translate(-50%, 10px);
      }

      &:hover {
        transform: translateY(-10px);

        &:after {
          opacity: 1;
        }
      }
    }

    a {
      &:active {
        &:before {
          transform: scale(0.9);
        }
      }

      &.active,
      &.router-link-exact-active {
        transform: scale(1);
        background: #fff;
        will-change: transform, background-color;
        box-shadow: 0px 0px 5px 5px;

        &:before {
          transform: scale(10);
        }

        &:after {
          opacity: 1;
        }
      }
    }
  }
</style>
