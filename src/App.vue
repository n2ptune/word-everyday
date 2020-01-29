<template>
  <div class="h-full bg-gray-200 overflow-auto">
    <Header
      v-if="
        $router.currentRoute.path !== '/' &&
          $router.currentRoute.name !== undefined
      "
    />
    <router-view
      class="flex mx-auto justify-center"
      :class="$router.currentRoute.path === '/' ? '' : 'container'"
    ></router-view>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/section/Header')
  }
}
</script>
