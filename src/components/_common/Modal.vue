<template>
  <section class="modal">
    <div class="mask" @click.self="deactivateModal(true)">
      <div class="container">
        <img :src="require('./../../assets/images/projects/' + data.name + '.jpg')">
        <h2>{{data.title}}</h2>
        <p>{{data.blurb}}</p>
        <button @click="deactivateModal(true)">Close</button>
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
      data: Object
    },
    mixins: [mixins],
    methods: {
      ...mapMutations([
        'closeModal'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
