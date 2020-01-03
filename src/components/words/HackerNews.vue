<template>
  <div class="hacker-news">
    {{ news }}
  </div>
</template>

<script>
export default {
  props: {
    news: {
      required: true
    }
  }
}
</script>
