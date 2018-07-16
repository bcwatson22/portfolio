<template>
  <footer class="group">
    <section class="small-print">
      <small>&copy;{{ year }}. All rights reserved.</small>
    </section>
    <section class="logo">
      <img src="./../../assets/images/global/logo-white.svg" alt="Billy Watson logo">
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    year: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 45px;

    small {
      display: block;
    }

    .logo {
      max-width: 115px;
      margin-left: auto;
    }
  }

  @media screen and (max-width: 600px) {
    footer {
      padding: 20px;
    }
  }
</style>
