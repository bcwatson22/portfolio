<template>
  <section class="projects">
    <!-- <h1 style="width: 100%">filteredProjects.length = {{filteredProjects.length}}, {{activeFilter}}</h1> -->
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
  </section>
</template>

<script>
  import Project from './Project.vue';

  import { mapGetters } from 'vuex';
  // import { mapMutations } from 'vuex';

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
        // Mounts the "safelyStoredNumber" getter to the scope of your component.
        'filteredProjects'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
