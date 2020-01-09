<template>
  <div class="word-quiz">
    <div class="word-title">
      <p>영어 단어에 알맞은 뜻을 골라보세요!</p>
    </div>
    <div class="word-top">
      {{ content.word }}
    </div>
    <div class="word-choice">
      <div class="word-sample" v-for="dummy in dummyWords" :key="dummy">
        <p class="word">{{ dummy }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['content'],
  data() {
    return {
      dummyWords: []
    }
  },
  computed: {
    ...mapGetters({
      filterDummy: 'words/getFilterDummyWord',
      currentWord: 'words/getWordObjWithName'
    })
  },
  async created() {
    const isDummy = this.filterDummy(this.content.word)
    if (!isDummy) {
      const baseURL = this.$baseURL()
      const { data } = await this.axios.get(
        `/dummy/10/3/${this.content.translatedText}`,
        {
          baseURL
        }
      )
      const dummy = {
        dummy: data,
        word: this.content.word
      }
      await this.$store.commit('words/setDummyText', dummy)
    }
    this.dummyWords = await this.currentWord(this.content.word)
  }
}
</script>

<style scoped>
.word-quiz {
  padding: 1rem;
}
.word-title {
  text-align: center;
  color: var(--secondary-color);
}
.word-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-weight: bold;
  font-size: 1.5rem;
}
.word-choice {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  margin: 1.25rem 0;
}
.word-sample {
  border-radius: 15px;
  border: 1px solid #ddd;
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding: 1.5rem;
  flex-grow: 4;
  flex-basis: 125px;
}
.word-sample:hover {
  cursor: pointer;
  background-color: #efefef;
}
.word-sample > .word {
  text-align: center;
  margin: auto auto;
}
</style>
