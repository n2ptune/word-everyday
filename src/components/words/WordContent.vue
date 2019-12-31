<template>
  <div class="word" :style="{ width: width || '100%' }">
    <div class="word-name">{{ word.word }} : {{ word.translatedWord }}</div>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.word {
  display: flex;
  flex-wrap: wrap;
  flex-basis: auto;
  padding: 1.5rem 0.4rem;
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: 0 2px 43px 1px rgba(0, 0, 0, .09);
}
</style>