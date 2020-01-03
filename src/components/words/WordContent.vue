<template>
  <div class="word-wrapper">
    <transition name="fade-content" mode="out-in">
      <WordLoading v-if="!words.length" key="loading" />
      <WordCard v-else :words="words" :info="info" key="words-card" />
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    WordLoading: () => import('@/components/words/WordLoading'),
    WordCard: () => import('@/components/words/WordCard')
  },
  data() {
    return {
      words: [],
      info: {
        id: null,
        date: null
      }
    }
  },
  async created() {
    // Base URL
    const baseURL =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4501/v0'
        : 'https://api.unending.xyz/v0'
    const { data } = await this.axios.get('/random', {
      baseURL
    })
    const { data: hackerNews } = await this.axios.get('/hackernews', {
      baseURL
    })
    console.log(hackerNews)
    this.words = data.words
    ;[this.info.id, this.info.date] = [data.id, data.date]
  }
}
</script>

<style scoped>
.fade-content-enter-active,
.fade-content-leave-active {
  transition: opacity 0.55s;
  opacity: 1;
}
.fade-content-enter,
.fade-content-leave-to {
  opacity: 0;
}
</style>
