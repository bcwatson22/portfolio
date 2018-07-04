<template>
  <header>
    <section class="logo">
      <img src="./../../assets/images/global/logo-white.svg" alt="Billy Watson logo">
    </section>
    <section class="intro">
      <p>A creative and passionate Web Developer from the Peak District with five years' experience, both in agency and in-house environments.</p>
      <p>JavaScript specialist with knowledge of modern frameworks including Angular and Vue. Also skilled in design, branding and video. Fan of music, mountain biking and Yorkshire Tea.</p>
    </section>
    <Nav/>
  </header>
</template>

<script>
import Nav from './Nav.vue';

export default {
  name: 'Header',
  components: {
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  header {
    // width: 80%;
    // margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 45px 30px 0;

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
  }
</style>
