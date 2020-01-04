<template>
  <div class="word-wrapper">
    <transition name="fade-content" mode="out-in">
      <WordLoading v-if="!words.length" key="loading" />
      <WordCard v-else :words="words" :info="info" key="words-card" />
    </transition>
    <transition name="fade-content" mode="out-in">
      <!-- <HackerNews
        v-if="hackerNews.length"
        :news="hackerNews"
        key="hacker-news"
      /> -->
      <p v-if="hackerNews.length">
        {{ hnExampleLength }}
      </p>
    </transition>
    <div class="card-description">
      영어 단어를 클릭하면 <span class="naver-link">네이버 영어사전</span>으로
      이동합니다.<br />
      한글 단어를 클릭하면 <span class="google-link">구글 번역 페이지</span>로
      이동합니다.
    </div>
  </div>
</template>

<script>
export default {
  components: {
    WordLoading: () => import('@/components/words/WordLoading'),
    WordCard: () => import('@/components/words/WordCard')
    // HackerNews: () => import('@/components/words/HackerNews')
  },
  data() {
    return {
      words: [],
      info: {
        id: null,
        date: null
      },
      hackerNews: []
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
    this.words = data.words
    ;[this.info.id, this.info.date] = [data.id, data.date]
    const { data: hackerNews } = await this.axios.get('/hackernews', {
      baseURL
    })
    this.hackerNews = hackerNews
    console.log(this.hackerNews)
  },
  computed: {
    hnExampleLength() {
      let initial = 0
      let n = 0
      const reducer = (acc, cur) => (cur ? acc + 1 : 0)
      this.hackerNews.map(hn => {
        n += hn.titles.reduce(reducer, initial)
      })
      return n
    }
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
.card-description {
  display: block;
  text-align: center;
  color: var(--secondary-color);
  margin: 1rem 1.5rem 0 1.5rem;
}
.card-description > .naver-link {
  color: var(--primary-color);
  font-weight: bold;
}
.card-description > .google-link {
  color: #1999ff;
  font-weight: bold;
}
</style>
