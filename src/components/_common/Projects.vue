<template>
  <section class="projects">
  <!-- <transition-group name="flip-list" tag="section" class="projects"> -->
    <h1 class="hidden">{{ projectsTitle }} Projects</h1>
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
      activeFilter: String,
      projectsTitle: String
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

      let activeFilter = this.activeFilter;

      if (activeFilter) {

        let title = this.capitalise(activeFilter);

        this.updateTitleMeta(title + ' Projects');

        this.projectsTitle = title;

      } else {

        this.updateTitleMeta('Projects');

        this.projectsTitle = 'All';

      }

    },
    watch: {
      activeFilter: function (newValue) {

        if (newValue) {

          let filter = this.capitalise(newValue);

          this.$store.commit('filterProjects', newValue);

          this.updateTitleMeta(filter + ' Projects');

          this.projectsTitle = filter;

        } else {

          this.$store.commit('restoreProjects');

          this.updateTitleMeta('Projects');

          this.projectsTitle = 'All';

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
