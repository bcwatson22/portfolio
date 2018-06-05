<template>
  <section class="project" :class="discipline">
    <img :src="require('./../../assets/images/' + discipline + '/' + path + '.png')">
    <article class="info">
      <h1>{{ title }}</h1>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Project',
  props: {
    id: Number,
    title: String,
    path: String,
    discipline: String
  }
}
</script>

<style lang="scss" scoped>

</style>
