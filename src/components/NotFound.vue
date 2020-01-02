<template>
  <div>
    <h1>Not Found</h1>
    <p>current Route : {{ route }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: this.$route.params
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>
