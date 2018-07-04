<template>
  <transition name="popup">
    <section class="modal">
      <div class="mask" @click.self="deactivateModal()">
        <div class="container">
          <div class="project-image">
            <img :src="require('./../../assets/images/projects/' + projectData.name + '.jpg')">
          </div>
          <div class="project-info">
            <h2>{{projectData.title}}</h2>
            <p>{{projectData.blurb}}</p>
          </div>
          <button class="icon toggle" @click="toggleInfo()">Info</button>
          <router-link to="/" class="icon close">Close</router-link>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
  // import { mapMutations } from 'vuex';

  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Modal',
    props: {
      // projectDatabase: Array
    },
    mixins: [mixins],
    data () {
      return {
        projectData: {}
      }
    },
    created () {

      this.getProjectData(this.$route.params.name);

    },
    methods: {
      toggleInfo: function () {

        let $infoBox = document.getElementsByClassName('project-info')[0];

        $infoBox.classList.toggle('visible');

      }
      // ...mapMutations([
      //   'closeModal'
      // ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .modal {
    .mask {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 30px;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: space-around;

      .container {
        overflow: hidden;
        will-change: opacity, transform;

        .project-image {
          height: 100%;
          overflow-y: scroll;
        }

        .project-info {
          position: fixed;
          bottom: 0;
          left: 0;
          padding: 30px 30% 30px 30px;
          background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 100%);
          opacity: 0;
          transform: translateY(100%);
          will-change: opacity, transform;
          transition: all 0.3s ease;

          &.visible {
            opacity: 1;
            transform: translateY(0%);
          }

          h2 {
            margin-top: 30px;
          }

          p {
            margin-bottom: 0;
          }
        }

        .close,
        .toggle {
          position: fixed;
          right: 30px;
        }

        .close {
          top: 30px;

          &:before {
            background: url('./../../assets/images/global/icons/close-light.svg') 50% 50% no-repeat;
            background-size: 50% 50%;
          }

          &:after {
            background: url('./../../assets/images/global/icons/close-dark.svg') 50% 50% no-repeat;
            background-size: 50% 50%;
          }
        }

        .toggle {
          bottom: 30px;

          &:before {
            background: url('./../../assets/images/global/icons/info-light.svg') 50% 50% no-repeat;
            background-size: 50% 50%;
          }

          &:after {
            background: url('./../../assets/images/global/icons/info-dark.svg') 50% 50% no-repeat;
            background-size: 50% 50%;
          }
        }
      }
    }
  }
</style>
