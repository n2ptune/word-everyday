<template>
  <header class="flex flex-wrap items-center h-12 bg-gray-100 px-2 md:px-5">
    <div class="text-green-600 text-lg font-bold">
      Word EveryDay
    </div>
    <div class="hidden sm:block menu ml-auto h-full">
      <ul class="h-full">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.to"
          tag="li"
          class="hover:border-green-600 hover:text-green-600"
        >
          <a>
            {{ route.name }}
          </a>
        </router-link>
      </ul>
    </div>
    <div class="block sm:hidden ml-auto">
      <font-awesome-icon
        icon="bars"
        class="cursor-pointer text-gray-600 hover:text-gray-900"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          to: '/',
          name: 'Home'
        },
        {
          to: '/contributing',
          name: 'Contributing'
        },
        {
          to: '/hn',
          name: 'Hacker News'
        },
        {
          to: '/olds',
          name: 'Words'
        },
        {
          to: '/contact',
          name: 'Contact'
        }
      ]
    }
  },
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.menu li {
  @apply inline-block mx-2;
  line-height: 2.8rem;
}
.menu li:hover {
  border-bottom-style: solid;
  border-bottom-width: 2px;
}
.router-link-exact-active {
  @apply text-green-600;
  @apply border-green-600;

  border-bottom-style: solid;
  border-bottom-width: 2px;
}
</style>
