<template>
  <div class="wrapper">
    <Header
      v-if="
        $router.currentRoute.path !== '/' &&
          $router.currentRoute.name !== undefined
      "
    />
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
.wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
