<template>
  <section class="projects">
  <!-- <transition-group name="flip-list" tag="section" class="projects"> -->
    <Project
      v-for="project of filteredProjects"
        :key="project.id"
        :title="project.title"
        :name="project.name"
        :disciplines="project.disciplines"
        :blurb="project.blurb"
        :link="project.link"
        :data="project"
      />
  <!-- </transition-group> -->
  </section>
</template>

<script>
  import Project from './Project.vue';
  import { mapGetters } from 'vuex';
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Projects',
    props: {
      activeFilter: String
    },
    components: {
      Project
    },
    mixins: [mixins],
    created () {

      let filter = this.$route.query.filter;

      if (filter) this.$store.commit('filterProjects', filter);

    },
    mounted () {

      let filter = this.activeFilter;

      if (filter) {

        this.updateTitleMeta(this.capitalise(filter));

      } else {

        this.updateTitleMeta('Projects');

      }

    },
    watch: {
      activeFilter: function (newValue) {

        if (newValue) {

          this.$store.commit('filterProjects', newValue);

          this.updateTitleMeta(this.capitalise(newValue));

        } else {

          this.$store.commit('restoreProjects');

          this.updateTitleMeta('Projects');

        }

      }
    },
    computed: {
      ...mapGetters([
        'filteredProjects'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  // .flip-list-move {
  //   transition: transform 1s;
  // }
</style>
