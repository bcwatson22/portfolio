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

  export default {
    name: 'Projects',
    props: {
      activeFilter: String
    },
    components: {
      Project
    },
    created () {

      let filter = this.$route.query.filter;

      if (filter) this.$store.commit('filterProjects', filter);

    },
    watch: {
      activeFilter: function (newValue) {

        if (newValue) {

          this.$store.commit('filterProjects', newValue);

        } else {

          this.$store.commit('restoreProjects');

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
