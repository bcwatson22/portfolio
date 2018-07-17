<template>
  <article v-if="link === 'raster'" class="project raster" :class="name" :data-primary="disciplines.primary.toLowerCase()">
    <router-link :to="'/projects/' + name">
      <!-- <span class="thumb"> -->
        <img :src="require('./../../assets/images/projects/' + name + '-2400.jpg')" :alt="title + ' thumb'">
      <!-- </span> -->
      <span class="overlay info">
        <ul class="disciplines indicate">
          <li v-for="(discipline, index) in disciplines.list" :key="index" class="icon" :class="discipline.toLowerCase()">
            {{ discipline }}
          </li>
        </ul>
        <h1>{{ title }}</h1>
        <p>{{ blurb }}</p>

      </span>
    </router-link>
  </article>
  <article v-else-if="link === 'vector'" class="project vector" :class="name" :data-primary="disciplines.primary.toLowerCase()">
    <router-link :to="'/projects/' + name">
      <!-- <span class="thumb"> -->
        <img :src="require('./../../assets/images/projects/' + name + '.svg')" :alt="title + ' thumb'">
      <!-- </span> -->

      <span class="overlay info">
        <ul class="disciplines indicate">
          <li v-for="(discipline, index) in disciplines.list" :key="index" class="icon" :class="discipline.toLowerCase()">
            {{ discipline }}
          </li>
        </ul>
        <h1>{{ title }}</h1>
        <p>{{ blurb }}</p>

      </span>
    </router-link>
  </article>
  <article v-else class="project" :class="name" :data-primary="disciplines.primary.toLowerCase()">
    <a :href="link" target="_blank">
      <!-- <span class="thumb"> -->
        <img :src="require('./../../assets/images/projects/' + name + '-1200.jpg')" :alt="title + ' thumb'">
      <!-- </span> -->
      <span class="overlay info">
        <ul class="disciplines indicate">
          <li v-for="(discipline, index) in disciplines.list" :key="index" class="icon" :class="discipline.toLowerCase()">
            {{ discipline }}
          </li>
        </ul>
        <h1>{{ title }}</h1>
        <p>{{ blurb }}</p>

      </span>
    </a>
  </article>
</template>

<script>
  // import ProjectInfo from './ProjectInfo.vue';
  // import { mapMutations } from 'vuex';

  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Project',
    // components: {
    //   ProjectInfo
    // },
    props: {
      data: Object,
      id: Number,
      title: String,
      name: String,
      disciplines: Object,
      blurb: String,
      link: String
    },
    mixins: [mixins],
    // methods: {
    //   ...mapMutations([
    //     'openModal'
    //   ])
    // }
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/styles/sass/_variables.scss';
  @import './../../assets/styles/sass/_mixins.scss';
  @import './../../assets/styles/sass/_animations.scss';

  .project {
    width: calc(50% - 15px);
    position: relative;
    // box-shadow: 0px 0px 5px 1px transparent;
    transition: all 0.3s ease;
    margin: 15px 0;
    background: #fff;
    display: flex;
    align-items: center;
    overflow: hidden;
    // min-height: 300px;
    // padding-top: 30%;

    &.vector {
      background: #fff;
    }

    &:before {
      content: '';
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: 60%;
    }

    &.raster {
      &:before {
        padding-top: 70%;
      }
    }

    &:after {
      content: '';
      display: table;
      clear: both;
    }

    &:hover,
    &:focus {
      // box-shadow: 2px 2px 4px 3px $blue;
      box-shadow: 0px 0px 5px 1px #fff;
      z-index: 2;
      // background: rgba(0, 0, 0, 0.7);

      .info {
        opacity: 1;
        transition: all 0.15s ease;
      }

      // a {
      //   background: rgba(0, 0, 0, 0.7);
      // }

      li {
        opacity: 1;
        // transform: translateX(0) scale(0.375);
        transform: translateX(0);
      }
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

  // .thumb {
  //   background: #fff;
  // }

  img {
    position: absolute;
    top: 0;
    left: 0;

    .planet-vlog &,
    .furness-brothers &,
    .rmd &,
    .pyramid-sk8 & {
      // position: absolute;
      max-width: none;
    }

    .planet-vlog & {
      width: 180%;
    }

    .furness-brothers & {
      width: 400%;
      left: -20%;
    }

    .rmd & {
      width: 300%;
      top: 10%;
      left: -190%;
    }

    .pyramid-sk8 & {
      width: 200%;
      top: -190%;
      left: -48%;
    }
  }

  .info {
    // color: #fff;
    // text-decoration: none;
    // position: absolute;
    // top: 0;
    // left: 0;
    padding: 30px 120px 30px 30px;
    // width: 100%;
    // height: 100%;
    // opacity: 0;
    // background: rgba(0, 0, 0, 0.7);
    // transition: all 0.5s ease;
    // cursor: pointer;
    // overflow: hidden;
    position: relative;
    display: inherit;
    // height: 100%;
    // width: 100%;

    h1 {
      text-align: left;
    }
  }

  .disciplines {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px 30px;
    height: 100%;

    .icon {
      opacity: 0;
      // transform: translateX(50px) scale(0.375);
      transform: translateX(50px);
      transition: all 0.25s ease;
      // @include hwa();
      @include delay(4, 0.1s, 0);
    }

    // &:hover,
    // &:focus {
    //   .icon {
    //     // transform: translateX(0) scale(1);
    //     transform: translateX(0);
    //
    //     &:before {
    //       opacity: 1;
    //     }
    //   }
    // }
  }

  @media screen and (max-width: 1000px) {
    .info {
      padding-right: 90px;
    }
  }

  @media screen and (max-width: 900px) {
    .project {
      width: calc(50% - 10px);
      margin: 10px 0;
    }

    .info {
      padding: 20px 80px 20px 20px;
    }

    .disciplines {
      // top: 20px;
      // right: 20px;
      padding: 10px 20px;
    }
  }

  // @media screen and (max-width: 770px) {
  //   .project {
  //     width: 100%;
  //     // padding-right: 30%;
  //     background: $grey;
  //
  //     &:before {
  //       padding: 0;
  //     }
  //   }
  //
  //   .thumb {
  //     float: left;
  //     width: 70%;
  //   }
  //
  //   img {
  //     .planet-vlog & {
  //       width: 100%;
  //       top: -90%;
  //     }
  //
  //     .furness-brothers & {
  //       top: -120%;
  //     }
  //
  //     .rmd & {
  //       top: -40%;
  //     }
  //
  //     .pyramid-sk8 & {
  //       top: -400%;
  //     }
  //   }
  //
  //   .info {
  //     height: auto;
  //     position: relative;
  //     float: right;
  //     width: 30%;
  //     opacity: 1;
  //     padding: 15px;
  //     left: auto;
  //     // right: 0;
  //     background: $grey;
  //   }
  //
  //   .disciplines {
  //     position: relative;
  //     padding: 0;
  //     height: auto;
  //     display: flex;
  //     justify-content: center;
  //
  //     .icon {
  //       transform: translate(0, 0);
  //       opacity: 1;
  //       // width: 33%;
  //       margin: 0 15px 0 0;
  //     }
  //   }
  // }

  @media screen and (max-width: 770px) {
    .project {
      width: 100%;
      flex-wrap: wrap;
      background: none;
      margin: 20px 0;
      box-shadow: 0px 0px 5px 1px #fff;

      // &:before {
      //   padding-top: 60%;
      // }
    }

    img {
      position: relative;

      .vector &,
      .planet-vlog & {
        position: absolute;
      }
    }

    // .thumb,
    .info {
      width: 100%;
      position: relative;
      overflow: visible;
      height: auto;
      // position: relative;
      opacity: 1;
      padding: 15px;
      left: auto;
      background: #000;

      .vector &,
      .planet-vlog & {
        margin-top: 60%;
        // position:2;
      }
      // margin-top: 60%;
      // float: none;
    }

    // .info {
      // height: auto;
      // // position: relative;
      // opacity: 1;
      // padding: 15px;
      // left: auto;
      // background: #000;
    // }

    .disciplines {
      // position: relative;
      // position: absolute;
      // width: 100%;
      // top: -20px;
      // // padding: 0;
      // padding: 15px;
      top: -35px;
      padding: 15px;
      height: auto;
      height: auto;
      display: flex;
      justify-content: center;

      .icon {
        transform: translate(0, 0);
        opacity: 1;
        // width: 33%;
        margin: 0 0 0 15px;
      }
    }

    p {
      margin: 0;
    }
  }

  // @media screen and (max-width: 450px) {
  //   .disciplines {
  //     // position: absolute;
  //     // top: -35px;
  //     // right: 0;
  //     // padding: 15px;
  //     // height: 100%;
  //     // display: initial;
  //
  //     .icon {
  //       margin: 0 0 0 15px;
  //
  //       &:last-of-type {
  //         margin: 0 0 0 15px;
  //       }
  //     }
  //   }
  //
  //   p {
  //     margin: 0;
  //   }
  // }
</style>
