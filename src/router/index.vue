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
</style>
