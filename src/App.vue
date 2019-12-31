<template>
  <div class="wrapper">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/section/Header')
  },
  created() {
    document.body.style.margin = 0
  }
}
</script>

<style scoped>

</style>