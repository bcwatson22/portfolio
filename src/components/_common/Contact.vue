<template>
  <section class="contact">
    <article class="links">
      <p>A creative Web Developer from the Peak District with five years' experience, both agency and in-house. Other skills include design, branding and video.</p>
      <p>JavaScript specialist with extensive knowledge of modern frameworks including Angular and Vue. Also a fan of music, mountain biking and Yorkshire Tea.</p>
      <ul class="icon-links">
        <li class="email"><a href="mailto:bcwatson22@gmail.com">bcwatson22@gmail.com</a></li>
        <li class="linkedin"><a href="https://www.linkedin.com/in/watsonbilly" target="_blank">linkedin.com/in/watsonbilly</a></li>
        <li class="github"><a href="https://github.com/bcwatson22" target="_blank">github.com/bcwatson22</a></li>
      </ul>
    </article>
    <article class="image">
      <img src="./../../assets/images/global/mugshot-1000.jpg" alt="Billy Watson" srcset="./../../assets/images/global/mugshot-800.jpg 800w, ./../../assets/images/global/mugshot-600.jpg 600w, ./../../assets/images/global/mugshot-400.jpg 400w"
      sizes="(min-width: 500px) 50vw, 100vw">
      <span class="overlay">
        <h1>Intit just.</h1>
      </span>
    </article>
  </section>
</template>

<script>
  export default {
    name: 'Contact'
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

    p {
      display: none;
    }
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

    h1 {
      margin: 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    .links {
      padding: 0;
    }
  }

  @media screen and (max-width: 650px) {
    ul li {
      margin-bottom: 30px;
      font-size: inherit;
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

    ul {
      flex-direction: row;

      li {
        width: 60%;

        &:last-of-type {
          margin-bottom: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    ul li {
      width: 100%;
    }
  }
</style>
