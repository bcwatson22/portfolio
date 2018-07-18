<template>
  <div class="cookie-banner">
    <span class="icon full-size cookie">Cookie</span>
    <p>This site uses cookies to give you a wicked browsing experience!</p>
    <button class="icon full-size close" @click="toggleElement($event, '.modal', '.details')">Info</button>
  </div>
</template>

<script>
  export default {
    name: 'CookieBanner'
  }
</script>

<style lang="scss" scoped>
  // footer {
  //   width: 100%;
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 30px 30px 45px;
  //
  //   small {
  //     display: block;
  //   }
  //
  //   .logo {
  //     max-width: 115px;
  //     margin-left: auto;
  //   }
  // }
  //
  // @media screen and (max-width: 900px) {
  //   footer {
  //     padding: 10px 20px 20px;
  //   }
  // }
  //
  // @media screen and (max-width: 450px) {
  //   footer {
  //     padding: 0 10px 20px;
  //   }
  // }
</style>
