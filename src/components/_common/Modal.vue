<template>
  <transition name="popup">
    <section class="modal">
      <div class="mask" @click.self="deactivateModal()">
        <div class="container">
          <div class="image" :class="projectData.link === 'vector' ? 'vector' : ''">
            <img v-if="projectData.link === 'raster'" :src="require('./../../assets/images/projects/' + projectData.name + '-1200.jpg')" :alt="projectData.title + ' thumb'" :srcset="require('./../../assets/images/projects/' + projectData.name + '-2400.jpg') + ' 2400w,' + require('./../../assets/images/projects/' + projectData.name + '-1200.jpg') + ' 1200w,' + require('./../../assets/images/projects/' + projectData.name + '-800.jpg') + ' 800w,' + require('./../../assets/images/projects/' + projectData.name + '-600.jpg') + ' 600w,' + require('./../../assets/images/projects/' + projectData.name + '-400.jpg') + ' 400w'"
            sizes="100vw">
            <img v-if="projectData.link === 'vector'" :src="require('./../../assets/images/projects/' + projectData.name + '.svg')" :alt="projectData.title + ' thumb'">
          </div>
          <div class="details">
            <h2>{{ projectData.title }}</h2>
            <p>{{ projectData.blurb }}</p>
          </div>
          <!-- <button class="icon full-size info" @click="toggleElement()">Info</button>
          <a class="icon full-size close" @click="$router.go(-1)">Close</a> -->
        </div>
        <button class="icon full-size info" @click="toggleElement($event, '.modal', '.details')">Info</button>
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
    watch: {
      projectData: function (newValue) {

        let title = newValue.title;

        if (title) this.updateTitleMeta(title);

      }
    }
  }
</script>

<style lang="scss" scoped>
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
    // pointer-events: none;
  }

  .image {
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

  .details {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 90px 30% 30px 30px;
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.6) 100%);
    opacity: 0;
    transform: translateY(100%);
    will-change: opacity, transform;
    transition: all 0.3s ease;

    &.toggle {
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
    right: 60px;
  }

  .close {
    top: 60px;
  }

  .info {
    bottom: 60px;
  }

  @media screen and (max-width: 900px) {
    .mask,
    .image.vector {
      padding: 20px;
    }

    .info {
      padding-left: 20px;
      padding-bottom: 20px;
    }

    .close,
    .info {
      right: 40px;
    }

    .close {
      top: 40px;
    }

    .info {
      bottom: 40px;
    }
  }

  @media screen and (max-width: 670px) {
    .mask,
    .image.vector {
      padding: 10px;
    }

    .image {
      // height: 100%;
      overflow-y: scroll;
      // display: flex;

      img {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: none;
      }
    }

    .info {
      padding-left: 10px;
      padding-bottom: 10px;
    }

    .close,
    .info {
      right: 20px;
    }

    .close {
      top: 20px;
    }

    .info {
      bottom: 20px;
    }
  }
</style>
