<template>
  <div class="router-home">
    <div class="container">
      <article class="words-article">
        <div class="contents">
          <transition-group name="fade">
            <WordContent
              v-for="sampleWord in sampleWords"
              :key="sampleWord.word"
              :word="sampleWord"
              :width="'60%'"
            />
          </transition-group>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    WordContent: () => import('@/components/words/WordContent')
  },
  data() {
    return {
      sampleWords: []
    }
  },
  created() {
    const endURL = '/api/v0/random-word'
    this.axios
      .get(
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:5000/word-everyday-2e27e/us-central1' + endURL
          : '/api/v0/random-word'
      )
      .then(result => {
        result.data.forEach(elem => {
          this.axios.get(`https://angel.gabia.io/api/v0/translate-word/en/ko/${elem}`).then((translated) => {
            this.sampleWords.push({
              word: elem,
              translatedWord: translated.data.message.result.translatedText
            })
          })
        })
      })
  }
}
</script>

<style scoped>
article {
  width: 100%;
}
.title-container::after {
  content: '';
  max-width: 100%;
  height: 2px;
  display: block;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-few-color),
    transparent
  );
  margin: 2rem 0;
}
.title {
  text-align: center;
}
.subtitle {
  text-align: center;
  margin-top: 0.5rem;
  color: var(--secondary-color);
}
.subtitle > span {
  color: var(--primary-color);
  font-weight: bold;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
