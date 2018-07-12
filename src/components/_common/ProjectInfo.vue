<template>
  <h1>{{ title }}</h1>
  <p>{{ blurb }}</p>
  <ul class="disciplines indicate">
    <li v-for="(discipline, index) in disciplines" :key="index" class="icon" :class="discipline.toLowerCase()">
      {{ discipline }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ProjectInfo'
  }
</script>
