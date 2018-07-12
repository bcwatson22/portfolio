<template>
  <transition name="popup">
    <section class="modal">
      <div class="mask" @click.self="deactivateModal()">
        <div class="container">
          <div class="project-image" :class="projectData.link === 'vector' ? 'vector' : ''">
            <img v-if="projectData.link === 'raster'" :src="require('./../../assets/images/projects/' + projectData.name + '-1200.jpg')" :alt="projectData.title + ' thumb'">
            <img v-if="projectData.link === 'vector'" :src="require('./../../assets/images/projects/' + projectData.name + '.svg')" :alt="projectData.title + ' thumb'">
          </div>
          <div class="project-info">
            <h2>{{ projectData.title }}</h2>
            <p>{{ projectData.blurb }}</p>
          </div>
          <!-- <button class="icon full-size info" @click="toggleInfo()">Info</button>
          <a class="icon full-size close" @click="$router.go(-1)">Close</a> -->
        </div>
        <button class="icon full-size info" @click="toggleInfo()">Info</button>
        <a class="icon full-size close" @click="$router.go(-1)">Close</a>
      </div>
    </section>
  </transition>
</template>

<script>
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Modal',
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
    }

    .container {
      overflow: hidden;
      will-change: opacity, transform;
      pointer-events: none;
    }

    .project-image {
      height: 100%;
      // overflow-y: scroll;
      // display: flex;

      &.vector {
        background: #fff;
        padding: 30px;
        display: flex;
      }
    }

    img {
      width: auto;
      max-height: 100%;
      margin: auto;
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
    .info {
      position: fixed;
      right: 30px;
    }

    .close {
      top: 30px;
    }

    .info {
      bottom: 30px;
    }
  }
</style>
