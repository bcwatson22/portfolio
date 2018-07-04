<template>
  <article class="project" :class="name">
    <img :src="require('./../../assets/images/projects/' + name + '.jpg')" :alt="title + ' thumb'">
    <a v-if="link !== 'modal'" class="info" :href="link" target="_blank">
      <h1>{{ title }}</h1>
      <p>{{ blurb }}</p>
      <ul class="indicator">
        <li v-for="(discipline, index) in disciplines" :key="index" :class="discipline.toLowerCase()">
          {{ discipline }}
        </li>
      </ul>
    </a>
    <router-link v-if="link === 'modal'" :to="'/projects/' + name" class="info">
      <h1>{{ title }}</h1>
      <p>{{ blurb }}</p>
      <ul class="indicator">
        <li v-for="(discipline, index) in disciplines" :key="index" :class="discipline.toLowerCase()">
          {{ discipline }}
        </li>
      </ul>
    </router-link>
  </article>
</template>

<script>
  // import { mapMutations } from 'vuex';

  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Project',
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

  .project {
    width: calc(50% - 15px);
    position: relative;
    // box-shadow: 0px 0px 5px 1px transparent;
    transition: all 0.3s ease;
    margin: 15px 0;
    background: #fff;
    display: flex;
    align-items: center;

    &:hover,
    &:focus {
      // box-shadow: 2px 2px 4px 3px $blue;
      box-shadow: 0px 0px 5px 1px #fff;
      z-index: 2;
    }

    .info {
      color: #fff;
      text-decoration: none;
      position: absolute;
      top: 0;
      left: 0;
      padding: 30px 30% 30px 30px;
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

      p {
        font-size: 14px;
        font-size: 1.4rem;
      }

      .indicator {
        position: absolute;
        top: 45px;
        right: 30px;

        li {
          display: block;
          margin-bottom: 15px;
          border-radius: 100%;
          text-indent: -99999rem;
          width: 15px;
          height: 15px;
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.25s ease;
          // @include hwa();
          @include delay(4, 0.1s, 0);
          // box-shadow: 0px 0px 3px 1px #fff;
          // border: 1px solid #fff;

          &.development {
            background: $yellow;
          }

          &.design {
            background: $green;
          }

          &.branding {
            background: $blue;
          }

          &.video {
            background: $red;
          }
        }
      }
    }

    &:hover,
    &:focus {
      .info {
        opacity: 1;
        transition: all 0.15s ease;

        .indicator li {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }
</style>
