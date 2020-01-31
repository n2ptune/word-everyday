<template>
  <section class="hero-wrapper">
    <HeroLeft />
    <HeroRight />
  </section>
</template>

<script>
export default {
  components: {
    HeroLeft: () => import('@/components/section/HeroLeft'),
    HeroRight: () => import('@/components/section/HeroRight')
  }
}
</script>

<style lang="css" scoped>
@import '~@/assets/style/hero.css';
@media screen and (max-width: 768px) {
  .hero-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
