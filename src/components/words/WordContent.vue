<template>
  <div class="word-wrapper">
    <transition name="fade-content" mode="out-in">
      <WordLoading v-if="!words.length" key="loading" />
      <WordCard v-else :words="words" :info="info" key="words-card" />
    </transition>
    <transition name="fade-content" mode="out-in">
      <div class="hn-preview" v-if="hackerNews.length">
        <div class="hn-length">
          {{ hnExampleLength }}개의 해커뉴스 예문 보기
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    WordLoading: () => import('@/components/words/WordLoading'),
    WordCard: () => import('@/components/words/WordCard')
  },
  async created() {
    const baseURL = this.$baseURL()
    const { data } = await this.axios.get('/random', {
      baseURL
    })
    await this.$store.commit('words/setWords', data.words)
    await this.$store.commit('words/setStatus', data)
    const { data: hackerNews } = await this.axios.get('/hackernews', {
      baseURL
    })
    await this.$store.commit('hn/setNews', hackerNews)
  },
  computed: {
    ...mapGetters({
      words: 'words/getWords',
      info: 'words/getWordsStatus',
      hackerNews: 'hn/getNews',
      hnExampleLength: 'hn/getNewsLength'
    })
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
.hn-preview {
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
}
.hn-length {
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  font-weight: bold;
  transition: background-color 0.5s, color 0.5s;
}
.hn-length:hover {
  color: white;
  background-color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
}
</style>
