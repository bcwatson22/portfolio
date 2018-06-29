<template>
  <section class="modal">
    <div class="mask" @click.self="deactivateModal()">
      <div class="container">
        <img :src="require('./../../assets/images/projects/' + modalData.name + '.jpg')">
        <div class="info">
          <h2>{{modalData.title}}</h2>
          <p>{{modalData.blurb}}</p>
        </div>
        <router-link to="/" class="close"></router-link>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex';

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
      ...mapMutations([
        'closeModal'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
