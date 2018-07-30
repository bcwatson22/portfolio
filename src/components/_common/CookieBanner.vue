<template>
  <section class="cookie-banner">
    <div class="inner">
      <span class="icon full-size cookie">Cookie</span>
      <p>This site uses cookies to give you a sweet user experience.</p>
      <button class="icon full-size close" @click="dismissBanner($event)">Info</button>
    </div>
  </section>
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
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    bottom: 0;
  }

  .inner {
    display: flex;
    align-items: center;
    padding: 20px 80px 20px 60px;
    max-width: 1160px;
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
    top: 50%;
    transform: translateY(-50%);

    &.cookie {
      left: 20px;
      background: transparent;
    }

    &.close {
      right: 30px;
    }
  }

  p {
    margin: 0;
  }

  @media screen and (max-width: 900px) {
    .inner {
      padding: 20px 70px 20px 50px;
    }

    .icon {
      &.cookie {
        left: 10px;
      }

      &.close {
        right: 20px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .inner {
      padding: 10px 70px 10px 50px;
    }
  }

  @media screen and (max-width: 450px) {
    .inner {
      padding: 20px 65px 20px 45px;
    }

    .icon {
      &.cookie {
        left: 5px;
      }

      &.close {
        right: 15px;
      }
    }
  }
</style>
