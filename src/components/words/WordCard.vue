<template>
  <div class="card-wrapper">
    <div class="card-title">
      <font-awesome-icon icon="info-circle" />
      최종 업데이트 : {{ new Date(info.date).toLocaleString() }}
    </div>
    <div class="word-card" v-for="word in words" :key="word.word">
      <div class="word-name">
        {{ word.word }}
      </div>
      <div class="word-translate">
        {{ word.translatedText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  },
  created() {
    console.log(this.words)
  }
}
</script>

<style scoped>
.card-title {
  text-align: center;
  color: var(--secondary-color);
  margin-bottom: 1.25rem;
}
.word-card {
  display: block;
  box-shadow: 0 0 7px 1px rgba(0, 25, 0, 0.15);
  border-radius: 5px;
  padding: 0.35rem;
  margin: 1.25rem auto;
}
</style>
