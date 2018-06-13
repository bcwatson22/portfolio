<template>
  <section class="project" :class="disciplines">
    <img :src="require('./../../assets/images/projects/' + name + '.jpg')">
    <a class="info" v-bind:href="link === 'modal' ? 'modal' : link" v-bind:target="link === 'modal' ? false : '_blank'">
      <h1>{{ title }}</h1>
      <p>{{ blurb }}</p>
      <ul class="indicator">
        <li v-for="(discipline, index) in disciplines" :key="index"  :class="discipline">
          {{ discipline }}
        </li>
      </ul>
    </a>
  </section>
</template>

<script>
export default {
  name: 'Project',
  props: {
    id: Number,
    title: String,
    name: String,
    disciplines: Array,
    blurb: String,
    link: String
  }
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
      background: rgba(0, 0, 0, 0.7);
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
          width: 14px;
          height: 14px;
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.25s ease;
          // @include hwa();
          @include delay(4, 0.1s, 0);

          &.development {
            background: $yellow;
          }

          &.design {
            background: $green;
          }

          &.illustration {
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
