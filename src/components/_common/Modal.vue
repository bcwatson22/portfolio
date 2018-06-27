<template>
  <section class="modal">
    <div class="mask" @click.self="deactivateModal()">
    <!-- <router-link to="/" tag="div" class="mask"> -->
      <div class="container">
        <img :src="require('./../../assets/images/projects/' + modalData.name + '.jpg')">
        <h2>{{modalData.title}}</h2>
        <p>{{modalData.blurb}}</p>
        <!-- <button @click="deactivateModal(true)">Close</button> -->
        <router-link to="/" class="close">Close</router-link>
      </div>
    <!-- </router-link> -->
    </div>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex';

  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Modal',
    props: {
      // modalData: Object,
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
