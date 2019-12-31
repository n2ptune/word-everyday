<template>
  <header class="header">
    <div class="h-container">
      <div class="header-brand">
        Word-EveryDay
      </div>
      <nav class="header-nav" v-if="$bp.isDesktop">
        <ul class="nav-wrapper">
          <li
            class="nav-router-wrapper"
            v-for="router in routerLists"
            :key="router.name"
          >
            <router-link class="nav-router" :to="router.to">{{
              router.name
            }}</router-link>
          </li>
        </ul>
      </nav>
      <div v-else>
        some icon
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      routerLists: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Today Words',
          to: '/today'
        },
        {
          name: 'Contributing',
          to: '/contributing'
        },
        {
          name: 'Contact',
          to: '/contact'
        }
      ]
    }
  },
  mounted() {}
}
</script>

<style scoped>
.header {
  position: relative;
  display: block;
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #ddd;
}
.h-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
.header-brand {
  font-size: 1.15rem;
  font-weight: bold;
  color: var(--primary-deep-color);
  margin-right: auto;
}
.header-nav {
  margin-left: auto;
}
.nav-wrapper {
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style-type: none;
}
.nav-router-wrapper {
  display: inline-block;
  height: 100%;
}
.nav-router {
  min-height: 100%;
  display: inline-block;
}
.nav-router:hover,
.router-link-exact-active {
  color: var(--primary-light-color);
  text-shadow: 0 0 0.01px var(--primary-light-color),
    0 0 0.01px var(--primary-light-color), 0 0 0.01px var(--primary-light-color);
}
.router-link-exact-active::after {
  content: '';
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  top: 18px;
  background-color: var(--primary-light-color);
}
.nav-router-wrapper:not(:last-child)::after {
  content: '|';
  color: var(--light-grey-color);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: inline-block;
}
</style>
