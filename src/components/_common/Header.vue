<template>
  <header>
    <section class="logo">
      <img src="./../../assets/images/global/logo-white.svg">
    </section>
    <section class="intro">
      <p>Creative and passionate Web Developer from the Peak District with five years' experience, both in agency and in-house environments.</p>
      <p>JavaScript specialist with knowledge of modern frameworks including Angular and Vue. Fan of music, mountain biking and Yorkshire Tea.</p>
      <!-- <p>I am a creative, responsible and self-motivated man from Derbyshire with just under five years' experience as a Web Developer, both in agency and in-house environments.</p>
      <p>I graduated with a First in Multimedia Technology at Leeds Metropolitan University - which taught me a wide variety of creative skills over a range of media formats. My interests include scuba diving, music, travel and mountain biking.</p> -->
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  header {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    .logo,
    .intro {
      width: calc(50% - 15px);
    }

    .intro {
      p {
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
