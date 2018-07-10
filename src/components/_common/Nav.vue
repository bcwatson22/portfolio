<template>
  <nav>
    <ul class="disciplines">
      <li data-indicate="Development">
        <router-link :to="currentFilter === 'development' ? '/projects' : { path: 'projects', query: { filter: 'development' }}" class="icon scale-up development" :class="currentFilter === 'development' ? 'active' : ''"></router-link>
      </li>
      <li data-indicate="Design">
        <router-link :to="currentFilter === 'design' ? '/projects' : { path: 'projects', query: { filter: 'design' }}" class="icon scale-up design" :class="currentFilter === 'design' ? 'active' : ''"></router-link>
      </li>
      <li data-indicate="Branding">
        <router-link :to="currentFilter === 'branding' ? '/projects' : { path: 'projects', query: { filter: 'branding' }}" class="icon scale-up branding" :class="currentFilter === 'branding' ? 'active' : ''"></router-link>
      </li>
      <li data-indicate="Video">
        <router-link :to="currentFilter === 'video' ? '/projects' : { path: 'projects', query: { filter: 'video' }}" class="icon scale-up video" :class="currentFilter === 'video' ? 'active' : ''"></router-link>
      </li>
      <li data-indicate="CV">
        <a href="#" class="icon scale-up cv"></a>
      </li>
      <li data-indicate="Contact">
        <a href="#" class="icon scale-up contact"></a>
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
      justify-content: space-around;
      // position: absolute;
      // width: 100%;
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

    // li {
    //   margin: 15px;
    //
    //   &.development a {
    //     background: $yellow;
    //
    //     &:before {
    //       background: url('./../../assets/images/global/icons/development-light.svg') 50% 50% no-repeat;
    //       background-size: 50% 50%;
    //     }
    //   }
    //
    //   &.design a {
    //     background: $green;
    //
    //     &:before {
    //       background: url('./../../assets/images/global/icons/design-light.svg') 50% 50% no-repeat;
    //       background-size: 50% 50%;
    //     }
    //   }
    //
    //   &.branding a {
    //     background: $blue;
    //
    //     &:before {
    //       background: url('./../../assets/images/global/icons/branding-light.svg') 50% 50% no-repeat;
    //       background-size: 50% 50%;
    //     }
    //   }
    //
    //   &.video a {
    //     background: $red;
    //
    //     &:before {
    //       background: url('./../../assets/images/global/icons/video-circle-light.svg') 50% 50% no-repeat;
    //       background-size: 50% 50%;
    //     }
    //   }
    //
    //   &.cv a {
    //     &:before {
    //       background: url('./../../assets/images/global/icons/cv-light.svg') 50% 50% no-repeat;
    //       background-size: 50% 50%;
    //     }
    //   }
    //
    //   &.contact a {
    //     &:before {
    //       background: url('./../../assets/images/global/icons/contact-light.svg') 50% 50% no-repeat;
    //       background-size: 50% 50%;
    //     }
    //   }
    // }

    a {
      // display: block;
      // position: relative;
      // width: 40px;
      // height: 40px;
      // transform: translateY(0) scale(0.375);
      // background: grey;
      // border-radius: 100%;
      // // text-indent: -99999rem;
      // transition: transform 0.2s ease;
      // will-change: transform;

      &:active {
        &:before {
          transform: scale(0.9);
        }
      }

      &.active {
        // box-shadow: 0px 0px 30px 15px #fff;
        transform: scale(1);
        background: #fff;
        // transition: all 0.2s ease;
        // transition-delay: 0.3s;
        will-change: transform, background-color;

        &:before {
          transform: scale(10);
        }

        &:after {
          opacity: 1;
        }

        // &:active {
        //   &:before {
        //     transform: scale(0.9);
        //   }
        // }
      }

      // &:before {
      //   content: '';
      //   display: block;
      //   width: 100%;
      //   height: 100%;
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   transition: opacity 0.2s ease;
      //   opacity: 0;
      //   will-change: opacity;
      // }

      // &:after {
      //   content: attr(data-indicate);
      //   display: inline-block;
      //   color: #fff;
      //   position: absolute;
      //   left: 50%;
      //   transform: translate(-50%, 45px);
      //   will-change: opacity;
      //   transition: opacity 0.3s ease;
      //   opacity: 0;
      // }

      // &:hover {
      //   transform: translateY(-10px) scale(1);
      //
      //   &:after {
      //     opacity: 1;
      //   }
      // }

      // &:active {
      //   &:before {
      //     transform: scale(0.9);
      //   }
      // }
    }
  }
</style>
