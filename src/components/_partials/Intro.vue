<template>
  <section :class="containerClass">
    <p>A creative Web Developer from the Peak District with five years' experience, both agency and in-house. Other skills include design, branding and video.</p>
    <p>JavaScript specialist with extensive knowledge of modern frameworks including Angular and Vue. Also a fan of music, mountain biking and Yorkshire Tea.</p>
  </section>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      containerClass: String
    }
  }
</script>
