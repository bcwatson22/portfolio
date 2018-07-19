<template>
  <div class="cookie-banner">
    <span class="icon full-size cookie">Cookie</span>
    <p>
      <span>This site uses cookies to give you a sweet user experience.</span>
      <span>By continuing to browse you have no qualms with that!</span>
    </p>
    <button class="icon full-size close" @click="dismissBanner($event)">Info</button>
  </div>
</template>

<script>
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'CookieBanner',
    mixins: [mixins],
    methods: {
      dismissBanner: function (event) {

        let $root = document.getElementById('app');

        this.$cookie.set('billy-watson', 'dismissed', 365);

        this.toggleElement(event, '#app', '.cookie-banner');

        $root.style.paddingBottom = '0';

        $root.addEventListener('transitionend', function () {

          $root.removeAttribute('style');

        }, false);

      }
    }
  }
</script>

<style lang="scss" scoped>
  .cookie-banner {
    display: flex;
    align-items: center;
    padding: 20px 70px 20px 50px;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    bottom: 0;
    width: 100%;
    opacity: 1;
    transform: translateY(0%);
    will-change: opacity, transform;
    transition: all 0.3s ease;

    &.toggle {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  .icon {
    position: absolute;

    &.cookie {
      left: 10px;
      background: transparent;
    }

    &.close {
      right: 20px;
    }
  }

  p {
    margin: 0;

    span {
      &:nth-of-type(2) {
        margin-left: 5px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    p span:nth-of-type(2) {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .cookie-banner {
      padding: 10px 70px 10px 50px;
    }
  }
</style>
