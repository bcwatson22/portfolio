<template>
  <section class="contact">
    <article class="links">
      <h1 class="hidden">Contact</h1>
      <p>A creative Web Developer from the Peak District with five years' experience, in both agency and client side roles. Other skills include design and branding.</p>
      <p>JavaScript specialist with extensive knowledge of modern frameworks including Angular and Vue. Also a fan of music, mountain biking and Yorkshire Tea.</p>
      <ul class="icon-links">
        <li class="email"><a href="mailto:bcwatson22@gmail.com">bcwatson22@gmail.com</a></li>
        <li class="linkedin"><a href="https://www.linkedin.com/in/watsonbilly" target="_blank">linkedin.com/in/watsonbilly</a></li>
        <li class="github"><a href="https://github.com/bcwatson22" target="_blank">github.com/bcwatson22</a></li>
      </ul>
    </article>
    <article class="image">
      <v-lazy-image :src="require('./../../assets/images/global/mugshot-1000.jpg')" :src-placeholder="require('./../../assets/images/global/mugshot-10.jpg')" alt="Billy Watson"
      :srcset="require('./../../assets/images/global/mugshot-1000.jpg') + ' 1000w,' + require('./../../assets/images/global/mugshot-800.jpg') + ' 800w,' + require('./../../assets/images/global/mugshot-600.jpg') + ' 600w,' + require('./../../assets/images/global/mugshot-400.jpg') + ' 400w'"
      sizes="(min-width: 500px) 50vw, 100vw"></v-lazy-image>
      <span class="overlay">
        <h2>Intit just.</h2>
      </span>
    </article>
    <article class="skills">
      <h1>Skills and knowledge</h1>
      <ul class="tech-icons">
        <li data-indicate="Angular"><a href="https://angular.io/" target="_blank">Angular</a></li>
        <li data-indicate="Vue"><a href="https://vuejs.org/" target="_blank">Vue</a></li>
        <li data-indicate="Gulp"><a href="https://gulpjs.com/" target="_blank">Gulp</a></li>
        <li data-indicate="Mocha"><a href="https://mochajs.org/" target="_blank">Mocha</a></li>
        <li data-indicate="Chai"><a href="http://www.chaijs.com/" target="_blank">Chai</a></li>
        <li data-indicate="Require"><a href="https://requirejs.org/" target="_blank">Require</a></li>
        <li data-indicate="Knockout"><a href="http://knockoutjs.com/" target="_blank">Knockout</a></li>
        <li data-indicate="Wordpress"><a href="https://wordpress.org/" target="_blank">Wordpress</a></li>
        <li data-indicate="Handlebars"><a href="https://handlebarsjs.com/" target="_blank">Handlebars</a></li>
        <li data-indicate="Sass"><a href="https://sass-lang.com/" target="_blank">Sass</a></li>
        <li data-indicate="jQuery"><a href="https://jquery.com/" target="_blank">jQuery</a></li>
        <li data-indicate="Grunt"><a href="https://gruntjs.com/" target="_blank">Grunt</a></li>
        <li data-indicate="Bower"><a href="https://bower.io/" target="_blank">Bower</a></li>
        <li data-indicate="Symfony"><a href="https://symfony.com/" target="_blank">Symfony</a></li>
        <li data-indicate="Git"><a href="https://git-scm.com/" target="_blank">Git</a></li>
        <li data-indicate="Photoshop"><a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank">Photoshop</a></li>
        <li data-indicate="Illustrator"><a href="https://www.adobe.com/uk/products/illustrator.html" target="_blank">Illustrator</a></li>
        <li data-indicate="InDesign"><a href="https://www.adobe.com/uk/products/indesign.html" target="_blank">InDesign</a></li>
      </ul>
    </article>
  </section>
</template>

<script>
  import mixins from './../../scripts/mixins.js';
  import VLazyImage from "v-lazy-image";

  export default {
    name: 'Contact',
    components: {
      VLazyImage
    },
    mixins: [mixins],
    mounted () {

      this.updateTitleMeta('Contact');

    }
  }
</script>

<style lang="scss" scoped>
  .contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 15px 0;
  }

  .links,
  .image {
    width: calc(50% - 15px);
  }

  .links {
    padding-left: 10%;
    position: relative;

    p {
      display: none;
    }
  }

  .icon-links {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    li {
      width: 100%;
      margin-bottom: 60px;
      font-size: 20px;
      font-size: 2rem;

      &:last-of-type {
        margin: 0;
      }
    }
  }

  .image {
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    transition: all 0.3s ease;
    will-change: box-shadow;
    margin-bottom: 30px;

    &:hover {
      box-shadow: 0px 0px 5px 1px #fff;

      .overlay {
        opacity: 1;
        transition: all 0.15s ease;
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;

    h2 {
      margin: 0;
      width: 100%;
    }
  }

  .tech-icons {
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 0 10px 20px 0;
      width: calc(11.11% - 10px);
      position: relative;

      &:hover:after {
        opacity: 1;
      }
    }

    a {
      display: block;
      width: 80px;
      height: 80px;
      text-indent: -99999rem;
      margin: 0 auto;

      &:active {
        transform: scale(0.9);
      }
    }

    [data-indicate="Angular"] a {
      background: url('./../../assets/images/global/icons/tech/angular.svg') 50% 50% no-repeat;
      background-size: auto 100%;
    }

    [data-indicate="Vue"] a {
      background: url('./../../assets/images/global/icons/tech/vue.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Gulp"] a {
      background: url('./../../assets/images/global/icons/tech/gulp.svg') 50% 50% no-repeat;
      background-size: auto 100%;
    }

    [data-indicate="Mocha"] a {
      background: url('./../../assets/images/global/icons/tech/mocha.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Chai"] a {
      background: url('./../../assets/images/global/icons/tech/chai.svg') 50% 50% no-repeat;
      background-size: auto 100%;
    }

    [data-indicate="Wordpress"] a {
      background: url('./../../assets/images/global/icons/tech/wordpress.svg') 50% 50% no-repeat;
      background-size: auto 100%;
    }

    [data-indicate="Knockout"] a {
      background: url('./../../assets/images/global/icons/tech/knockout.svg') 50% 50% no-repeat;
      background-size: auto 100%;
    }

    [data-indicate="Require"] a {
      background: url('./../../assets/images/global/icons/tech/require.svg') 50% 50% no-repeat;
      background-size: auto 100%;
    }

    [data-indicate="Handlebars"] a {
      background: url('./../../assets/images/global/icons/tech/handlebars.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Grunt"] a {
      background: url('./../../assets/images/global/icons/tech/grunt.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="jQuery"] a {
      background: url('./../../assets/images/global/icons/tech/jquery.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Bower"] a {
      background: url('./../../assets/images/global/icons/tech/bower.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Sass"] a {
      background: url('./../../assets/images/global/icons/tech/sass.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Symfony"] a {
      background: url('./../../assets/images/global/icons/tech/symfony.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Git"] a {
      background: url('./../../assets/images/global/icons/tech/git.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Photoshop"] a {
      background: url('./../../assets/images/global/icons/tech/photoshop.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="Illustrator"] a {
      background: url('./../../assets/images/global/icons/tech/illustrator.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }

    [data-indicate="InDesign"] a {
      background: url('./../../assets/images/global/icons/tech/indesign.svg') 50% 50% no-repeat;
      background-size: 100% auto;
    }
  }

  @media screen and (max-width: 900px) {
    .links {
      padding: 0;
    }

    .tech-icons {
      li {
        width: calc(16.66% - 10px);
        margin-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .icon-links li {
      margin-bottom: 30px;
      font-size: inherit;
    }
  }

  @media screen and (max-width: 600px) {
    .tech-icons li {
      margin-bottom: 0;

      &:after {
        bottom: 4px;
        font-size: 12px;
        font-size: 1.2rem;
      }

      a {
        width: 60px;
        height: 60px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .contact {
      display: block;
    }

    .links,
    .image {
      width: 100%;
    }

    .links {
      p {
        display: inline-block;

        &:last-of-type {
          margin-bottom: 30px;
        }
      }
    }

    .icon-links {
      flex-direction: row;
      position: relative;
      top: 0;
      transform: none;

      li {
        width: 60%;

        &:last-of-type {
          margin-bottom: 30px;
        }
      }
    }

    .tech-icons li {
      width: calc(33.33% - 10px);
    }
  }

  @media screen and (max-width: 450px) {
    .contact {
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 400px) {
    .icon-links li {
      width: 100%;
    }
  }
</style>
