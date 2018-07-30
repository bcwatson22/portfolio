<template>
  <article v-if="link === 'raster'" class="project raster" :class="name" :data-primary="disciplines.primary.toLowerCase()">
    <a :href="'projects/' + name" @click.prevent="rememberFilter($event)">
      <v-lazy-image :src="require('./../../assets/images/projects/' + name + '-1460.jpg')" :src-placeholder="require('./../../assets/images/projects/' + name + '-10.jpg')" :alt="title + ' thumb'"
      :srcset="require('./../../assets/images/projects/' + name + '-1460.jpg') + ' 1460w,' + require('./../../assets/images/projects/' + name + '-1200.jpg') + ' 1200w,' + require('./../../assets/images/projects/' + name + '-800.jpg') + ' 800w,' + require('./../../assets/images/projects/' + name + '-600.jpg') + ' 600w,' + require('./../../assets/images/projects/' + name + '-400.jpg') + ' 400w'"
      sizes="(min-width: 771px) 50vw, 100vw"></v-lazy-image>
      <span class="overlay">
        <ul class="disciplines indicate">
          <li v-for="(discipline, index) in disciplines.list" :key="index" class="icon" :class="discipline.toLowerCase()">
            {{ discipline }}
          </li>
        </ul>
        <h1>{{ title }}</h1>
        <p>{{ blurb }}</p>
      </span>
    </a>
    <button class="icon full-size info" @click.self="toggleElement($event, '.project', '.overlay')">Info</button>
  </article>
  <article v-else-if="link === 'vector'" class="project vector" :class="name" :data-primary="disciplines.primary.toLowerCase()">
    <a :href="'projects/' + name" @click.prevent="rememberFilter($event)">
      <img :src="require('./../../assets/images/projects/' + name + '.svg')" :alt="title + ' thumb'">
      <span class="overlay">
        <ul class="disciplines indicate">
          <li v-for="(discipline, index) in disciplines.list" :key="index" class="icon" :class="discipline.toLowerCase()">
            {{ discipline }}
          </li>
        </ul>
        <h1>{{ title }}</h1>
        <p>{{ blurb }}</p>
      </span>
    </a>
    <button class="icon full-size info" @click.self="toggleElement($event, '.project', '.overlay')">Info</button>
  </article>
  <article v-else-if="link === 'embed'" class="project video" :class="[{ 'toggle': showPlayer, 'embedded': playerReady }, name]" :data-primary="disciplines.primary.toLowerCase()">
    <a :href="'projects/' + name" @click.prevent="loadVideo()">
      <span class="video-holder">
        <iframe v-if="showPlayer" src="https://player.vimeo.com/video/280418918" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen @load="iFrameLoaded()"></iframe>
      </span>
      <v-lazy-image :src="require('./../../assets/images/projects/' + name + '-1460.jpg')" :src-placeholder="require('./../../assets/images/projects/' + name + '-10.jpg')" :alt="title + ' thumb'"
      :srcset="require('./../../assets/images/projects/' + name + '-1460.jpg') + ' 1460w,' + require('./../../assets/images/projects/' + name + '-1200.jpg') + ' 1200w,' + require('./../../assets/images/projects/' + name + '-800.jpg') + ' 800w,' + require('./../../assets/images/projects/' + name + '-600.jpg') + ' 600w,' + require('./../../assets/images/projects/' + name + '-400.jpg') + ' 400w'"
      sizes="(min-width: 771px) 50vw, 100vw"></v-lazy-image>
      <span class="overlay">
        <ul class="disciplines indicate">
          <li v-for="(discipline, index) in disciplines.list" :key="index" class="icon" :class="discipline.toLowerCase()">
            {{ discipline }}
          </li>
        </ul>
        <h1>{{ title }}</h1>
        <p>{{ blurb }}</p>
      </span>
    </a>
    <button class="icon full-size close" @click.self="unloadVideo()">Close</button>
    <button class="icon full-size info" @click.self="toggleElement($event, '.project', '.overlay')">Info</button>
  </article>
  <article v-else class="project web" :class="name" :data-primary="disciplines.primary.toLowerCase()">
    <a :href="link" target="_blank">
      <v-lazy-image :src="require('./../../assets/images/projects/' + name + '-1460.jpg')" :src-placeholder="require('./../../assets/images/projects/' + name + '-10.jpg')" :alt="title + ' thumb'" :srcset="require('./../../assets/images/projects/' + name + '-1460.jpg') + ' 1460w,' + require('./../../assets/images/projects/' + name + '-1200.jpg') + ' 1200w,' + require('./../../assets/images/projects/' + name + '-800.jpg') + ' 800w,' + require('./../../assets/images/projects/' + name + '-600.jpg') + ' 600w,' + require('./../../assets/images/projects/' + name + '-400.jpg') + ' 400w'" sizes="(min-width: 771px) 50vw, 100vw"></v-lazy-image>
      <span class="overlay">
        <ul class="disciplines indicate">
          <li v-for="(discipline, index) in disciplines.list" :key="index" class="icon" :class="discipline.toLowerCase()">
            {{ discipline }}
          </li>
        </ul>
        <h1>{{ title }}</h1>
        <p>{{ blurb }}</p>
      </span>
    </a>
    <button class="icon full-size info" @click.self="toggleElement($event, '.project', '.overlay')">Info</button>
  </article>
</template>

<script>
  import mixins from './../../scripts/mixins.js';
  import VLazyImage from 'v-lazy-image';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Project',
    props: {
      data: Object,
      id: Number,
      title: String,
      name: String,
      disciplines: Object,
      blurb: String,
      link: String
    },
    components: {
      VLazyImage
    },
    mixins: [mixins],
    data () {
      return {
        showPlayer: false,
        playerReady: false
      }
    },
    methods: {
      rememberFilter: function (event) {

        let href = event ? event.currentTarget.getAttribute('href') : '';

        this.$store.commit('setPrevFilter', this.currentFilter);

        this.$router.push(href);

      },
      loadVideo: function () {

        this.showPlayer = true;

      },
      unloadVideo: function () {

        this.showPlayer = false;
        this.playerReady = false;

      },
      iFrameLoaded: function () {

        this.playerReady = true;

      }
    },
    computed: {
      ...mapGetters([
        'currentFilter'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/styles/sass/_variables.scss';
  @import './../../assets/styles/sass/_mixins.scss';

  .project {
    width: calc(50% - 15px);
    position: relative;
    margin: 15px 0;
    background: #fff;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: all 0.3s ease;
    will-change: box-shadow;

    &.video {
      background: #000 url('./../../assets/images/global/loader.svg') 50% 50% no-repeat;
      background-size: 80px 80px;

      &.toggle {
        &:before {
          content: '';
          width: 1px;
          margin-left: -1px;
          float: left;
          height: 0;
          padding-top: 70%;
        }

        &:after {
          content: '';
          display: table;
          clear: both;
        }

        img,
        .overlay {
          display: none;
        }

        .close {
          display: block;
        }
      }
    }

    &.vector {
      background: #fff;
    }

    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px 1px #fff;

      .overlay {
        opacity: 1;
        transition: all 0.15s ease;
      }

      li {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &:active {
      transform: scale(0.99);
      transition: none;
    }
  }

  a {
    width: 100%;
    height: 100%;
    position: relative;

    &:hover,
    &:focus,
    &:visited {
      text-decoration: none;
    }
  }

  .info,
  .close {
    position: absolute;
    right: 30px;
    display: none;
  }

  .info {
    bottom: 30px;
  }

  .close {
    top: 30px;
  }

  iframe,
  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  iframe {
    width: 100%;
    height: 100%;
    background: #000;
    transform: translateY(-100%);
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.3s ease;

    .embedded & {
      transform: translateY(0);
      opacity: 1;
    }
  }

  img {
    .planet-vlog &,
    .furness-brothers &,
    .rmd &,
    .pyramid-sk8 & {
      max-width: none;
    }

    .planet-vlog & {
      top: 0;
    }

    .furness-brothers &,
    .rmd &,
    .pyramid-sk8 & {
      transform: none;
    }

    .furness-brothers & {
      width: 400%;
      top: 0;
      left: -20%;
    }

    .rmd & {
      width: 300%;
      top: 10%;
      left: -190%;
    }

    .pyramid-sk8 & {
      width: 200%;
      top: -200%;
      left: -48%;
    }
  }

  .overlay {
    padding: 30px 120px 30px 30px;
    position: relative;
    display: inherit;
    min-height: 300px;

    &.toggle {
      opacity: 1;
      transition: all 0.15s ease;

      li {
        opacity: 1;
        transform: translateX(0);
      }
    }

    h1 {
      text-align: left;
    }

    p {
      margin: 0;
    }
  }

  .disciplines {
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
    height: 100%;

    .icon {
      margin-top: 0;
      margin-bottom: 15px;
      opacity: 0;
      transform: translateX(50px);
      transition: all 0.25s ease;
      @include delay(4, 0.1s, 0);
    }
  }

  @media screen and (pointer: coarse) and (min-width: 771px) {
    .project:hover,
    .project:focus {
      .overlay {
        opacity: 0;

        &.toggle {
          opacity: 1;
        }
      }
    }

    .info {
      display: block;
    }
  }

  @media screen and (max-width: 1100px) {
    .overlay {
      min-height: 260px;
    }
  }

  @media screen and (max-width: 1000px) {
    img {
      top: 50%;
      transform: translateY(-50%);

      &.v-lazy-image {
        transform: scale(1.1) translateY(-50%);

        .planet-vlog & {
          transform: scale(1.1);
        }
      }

      &.v-lazy-image-loaded {
        transform: scale(1) translateY(-50%);

        .planet-vlog & {
          transform: scale(1);
        }
      }
    }

    .overlay {
      padding-right: 90px;
    }
  }

  @media screen and (max-width: 900px) {
    .project {
      width: calc(50% - 10px);
      margin: 10px 0;
    }

    .overlay {
      min-height: 230px;
      padding: 20px 80px 20px 20px;
    }

    .disciplines {
      padding: 20px;
    }

    .close {
      top: 20px;
      right: 20px;
    }
  }

  @media screen and (max-width: 770px) {
    .project {
      width: 100%;
      flex-wrap: wrap;
      background: none;
      margin: 20px 0;
      box-shadow: 0px 0px 5px 1px #fff;
    }

    img {
      position: relative;
      top: 0;
      transform: none;

      .vector &,
      .planet-vlog & {
        position: absolute;
      }

      &.v-lazy-image {
        transform: scale(1.1);
      }

      &.v-lazy-image-loaded {
        transform: scale(1);
      }
    }

    .overlay {
      width: 100%;
      position: relative;
      overflow: visible;
      height: auto;
      opacity: 1;
      padding: 15px;
      left: auto;
      background: #000;
      min-height: 0;

      .vector &,
      .planet-vlog & {
        margin-top: 60%;
      }
    }

    .disciplines {
      top: -35px;
      padding: 15px;
      height: auto;
      height: auto;
      display: flex;
      justify-content: center;

      .icon {
        transform: translate(0, 0);
        opacity: 1;
        margin: 0 0 0 15px;
      }
    }

    .close {
      top: 15px;
      right: 15px;
    }
  }
</style>
