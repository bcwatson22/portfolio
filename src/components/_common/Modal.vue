<template>
  <section class="modal">
    <div class="mask" @click.self="deactivateModal()">
      <div class="container">
        <div class="project-image">
          <img :src="require('./../../assets/images/projects/' + modalData.name + '.jpg')">
        </div>
        <div class="project-info">
          <h2>{{modalData.title}}</h2>
          <p>{{modalData.blurb}}</p>
        </div>
        <button class="icon toggle" @click="toggleInfo()">Info</button>
        <router-link to="/" class="icon close">Close</router-link>
      </div>
    </div>
  </section>
</template>

<script>
  // import { mapMutations } from 'vuex';

  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Modal',
    props: {
      projectData: Array
    },
    mixins: [mixins],
    data () {
      return {
        modalData: {}
      }
    },
    created () {

      this.getProjectData();

    },
    methods: {
      getProjectData: function () {

        let project = this.projectData.filter(project => project.name === this.$route.params.name);

        this.modalData = project[0];

      },
      toggleInfo: function () {

        let $infoBox = document.getElementsByClassName('project-info')[0];

        $infoBox.classList.toggle('visible');

      }
      // ...mapMutations([
      //   'closeModal'
      // ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
