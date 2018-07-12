<template>
  <section class="contact">
    <article class="image">
      <img src="./../../assets/images/global/mugshot.jpg" alt="Billy Watson">
    </article>
    <article class="links">
      <ul class="icon-links">
        <li class="email"><a href="mailto:bcwatson22@gmail.com">bcwatson22@gmail.com</a></li>
        <li class="linkedin"><a href="https://www.linkedin.com/in/watsonbilly">linkedin.com/in/watsonbilly</a></li>
        <li class="github"><a href="https://github.com/bcwatson22">github.com/bcwatson22</a></li>
      </ul>
    </article>
  </section>
</template>

<script>
  // import Project from './Project.vue';

  // import { mapGetters } from 'vuex';
  // import { mapMutations } from 'vuex';

  export default {
    name: 'Contact'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .image,
    .links {
      width: calc(50% - 15px);
    }
  }

  img {
    border-radius: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;

    li {
      width: 100%;
      margin-bottom: 60px;
      font-size: 2rem;

      &:last-of-type {
        margin: 0;
      }
    }
  }
</style>
