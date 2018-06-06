<template>
  <div id="app">
    <section class="wrapper">
      <Header/>
      <!-- <img src="./assets/images/global/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <main>
        <Project
          v-for="project of projects"
          v-bind:key="project.id"
          v-bind:title="project.title"
          v-bind:path="project.path"
          v-bind:discipline="project.discipline"
          />
      </main>
      <Footer v-bind:year="copyrightYear"/>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import Header from './components/_common/Header.vue'
import Project from './components/_common/Project.vue'
import Footer from './components/_common/Footer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Project,
    Footer
  },
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Bing Jones',
          path: 'bing',
          discipline: 'development'
        },
        // {
        //   id: 2,
        //   title: 'Member Centre',
        //   path: 'member',
        //   discipline: 'development'
        // }
      ],
      copyrightYear: this.getCurrentYear()
    }
  },
  methods: {
    getCurrentYear: function () {
      
      let d = new Date(),
          y = d.getFullYear();

      return y

    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
