<template>
  <header>
    <router-link to="/projects" class="logo">
      <img src="./../../assets/images/global/logo-white.svg" alt="Billy Watson logo">
    </router-link>
    <section class="intro">
      <p>A creative and passionate Web Developer from the Peak District with five years' experience, both in agency and in-house environments.</p>
      <p>JavaScript specialist with extensive knowledge of modern frameworks including Angular and Vue. Also skilled in design, branding and video. Fan of music, mountain biking and Yorkshire Tea.</p>
    </section>
    <Nav/>
  </header>
</template>

<script>
  import Nav from './Nav.vue';
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Header',
    components: {
      Nav
    },
    mixins: [mixins]
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 45px 30px 0;
  }

  .logo,
  .intro {
    width: calc(50% - 15px);
  }

  .logo {
    padding-left: 10%;
  }

  .intro {
    padding-right: 10%;

    p {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 900px) {
    header {
      padding: 20px 20px 0;
    }

    .logo,
    .intro {
      padding: 0;
      width: 100%;
    }

    .logo {
      padding: 0 25%;
      margin-bottom: 20px;
    }

    .intro {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      p {
        width: calc(50% - 10px);
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 450px) {
    header {
      padding: 20px 10px 0;
    }

    .logo {
      padding: 0 15%;
    }

    .intro {
      p {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
</style>
