<template>
  <nav>
    <ul class="disciplines">
      <li class="development">
        <a href="development" @click.prevent="filterProjects($event)" data-indicate="Development"></a>
      </li>
      <li class="design">
        <a href="design" @click.prevent="filterProjects($event)" data-indicate="Design"></a>
      </li>
      <li class="branding">
        <a href="branding" @click.prevent="filterProjects($event)" data-indicate="Branding"></a>
      </li>
      <li class="video">
        <a href="video" @click.prevent="filterProjects($event)" data-indicate="Video"></a>
      </li>
      <li class="cv">
        <a href="#" data-indicate="CV"></a>
      </li>
      <li class="contact">
        <a href="#" data-indicate="Contact"></a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    methods: {
      filterProjects: function (event) {

        let href = event ? event.currentTarget.getAttribute('href') : '',
            currentFilter = this.$route.query.filter;

        console.log(currentFilter);

        this.$router.push({ path: 'projects', query: { filter: href }});

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
      a {
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
      margin: 15px;

      &.development a {
        background: $yellow;

        &:before {
          background: url('./../../assets/images/global/icons/development-light.svg') 50% 50% no-repeat;
          background-size: 50% 50%;
        }
      }

      &.design a {
        background: $green;

        &:before {
          background: url('./../../assets/images/global/icons/design-light.svg') 50% 50% no-repeat;
          background-size: 50% 50%;
        }
      }

      &.branding a {
        background: $blue;

        &:before {
          background: url('./../../assets/images/global/icons/branding-light.svg') 50% 50% no-repeat;
          background-size: 50% 50%;
        }
      }

      &.video a {
        background: $red;

        &:before {
          background: url('./../../assets/images/global/icons/video-circle-light.svg') 50% 50% no-repeat;
          background-size: 50% 50%;
        }
      }

      &.cv a {
        &:before {
          background: url('./../../assets/images/global/icons/cv-light.svg') 50% 50% no-repeat;
          background-size: 50% 50%;
        }
      }

      &.contact a {
        &:before {
          background: url('./../../assets/images/global/icons/contact-light.svg') 50% 50% no-repeat;
          background-size: 50% 50%;
        }
      }
    }

    a {
      display: block;
      position: relative;
      width: 40px;
      height: 40px;
      transform: translateY(0) scale(0.375);
      background: grey;
      border-radius: 100%;
      // text-indent: -99999rem;
      transition: transform 0.2s ease;
      will-change: transform;

      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.2s ease;
        opacity: 0;
        will-change: opacity;
      }

      &:after {
        content: attr(data-indicate);
        display: inline-block;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 45px);
        will-change: opacity;
        transition: opacity 0.3s ease;
        opacity: 0;
      }

      &:hover {
        transform: translateY(-10px) scale(1);

        &:after {
          opacity: 1;
        }
      }

      &:active {
        &:before {
          transform: scale(0.9);
        }
      }
    }
  }
</style>
