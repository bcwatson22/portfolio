<template>
  <article v-if="link === 'raster'" class="project" :class="name">
    <img :src="require('./../../assets/images/projects/' + name + '-2400.jpg')" :alt="title + ' thumb'">
    <router-link :to="'/projects/' + name" class="info">
      <h1>{{ title }}</h1>
      <p>{{ blurb }}</p>
      <ul class="disciplines indicate">
        <li v-for="(discipline, index) in disciplines" :key="index" class="icon" :class="discipline.toLowerCase()">
          {{ discipline }}
        </li>
      </ul>
    </router-link>
  </article>
  <article v-else-if="link === 'vector'" class="project" :class="name">
    <img :src="require('./../../assets/images/projects/' + name + '.svg')" :alt="title + ' thumb'">
    <router-link :to="'/projects/' + name" class="info">
      <h1>{{ title }}</h1>
      <p>{{ blurb }}</p>
      <ul class="disciplines indicate">
        <li v-for="(discipline, index) in disciplines" :key="index" class="icon" :class="discipline.toLowerCase()">
          {{ discipline }}
        </li>
      </ul>
    </router-link>
  </article>
  <article v-else class="project" :class="name">
    <img :src="require('./../../assets/images/projects/' + name + '-1200.jpg')" :alt="title + ' thumb'">
    <a class="info" :href="link" target="_blank">
      <h1>{{ title }}</h1>
      <p>{{ blurb }}</p>
      <ul class="disciplines indicate">
        <li v-for="(discipline, index) in disciplines" :key="index" class="icon" :class="discipline.toLowerCase()">
          {{ discipline }}
        </li>
      </ul>
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
      disciplines: Array,
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
    min-height: 300px;

    &:hover,
    &:focus {
      // box-shadow: 2px 2px 4px 3px $blue;
      box-shadow: 0px 0px 5px 1px #fff;
      z-index: 2;

      .info {
        opacity: 1;
        transition: all 0.15s ease;
      }

      li {
        opacity: 1;
        // transform: translateX(0) scale(0.375);
        transform: translateX(0);
      }
    }
  }

  img {
    .planet-vlog &,
    .furness-brothers &,
    .rmd &,
    .pyramid-sk8 & {
      position: absolute;
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
      left: -50%;
    }
  }

  .info {
    color: #fff;
    text-decoration: none;
    position: absolute;
    top: 0;
    left: 0;
    padding: 30px 150px 30px 30px;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease;
    cursor: pointer;
    overflow: hidden;

    h1 {
      text-align: left;
    }

    // p {
    //   font-size: 14px;
    //   font-size: 1.4rem;
    // }
  }

  .disciplines {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px 15px;
    height: 100%;

    .icon {
      opacity: 0;
      // transform: translateX(50px) scale(0.375);
      transform: translateX(50px);
      transition: all 0.25s ease;
      // @include hwa();
      @include delay(4, 0.1s, 0);
    }

    &:hover,
    &:focus {
      .icon {
        // transform: translateX(0) scale(1);
        transform: translateX(0);

        &:before {
          opacity: 1;
        }
      }
    }
  }
        // li {
        //   animation: slideInRight 0.25s ease;
        // }

        // li {
        //   display: block;
        //   margin-bottom: 15px;
        //   border-radius: 100%;
        //   text-indent: -99999rem;
        //   width: 15px;
        //   height: 15px;
        //   opacity: 0;
        //   transform: translateX(50px);
        //   transition: all 0.25s ease;
        //   // @include hwa();
        //   @include delay(4, 0.1s, 0);
        //   // box-shadow: 0px 0px 3px 1px #fff;
        //   // border: 1px solid #fff;
        //
        //   &.development {
        //     background: $yellow;
        //   }
        //
        //   &.design {
        //     background: $green;
        //   }
        //
        //   &.branding {
        //     background: $blue;
        //   }
        //
        //   &.video {
        //     background: $red;
        //   }
        // }


    // &:hover,
    // &:focus {
    //   .info {
    //     opacity: 1;
    //     transition: all 0.15s ease;
    //
    //     li {
    //       opacity: 1;
    //       transform: translateX(0) scale(0.375);
    //     }
    //
    //     // li {
    //     //   animation: slideInRight 0.25s ease forwards;
    //     //   @include delay(4, 0.1s, 0, false);
    //     // }
    //   }
    // }

</style>
