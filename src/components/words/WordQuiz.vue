<template>
  <div class="word-quiz">
    <div class="word-title">
      <p>영어 단어에 알맞은 뜻을 골라보세요!</p>
      <font-awesome-icon
        class="btn-close-modal"
        @click="closeModal"
        icon="times"
        :style="{
          float: 'right',
          marginRight: '8px',
          marginTop: '3px',
          color: 'black',
          cursor: 'pointer'
        }"
      />
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
      const { data } = await this.axios.post(
        '/dummy',
        {
          length: 10,
          count: 3,
          translatedText: this.content.translatedText
        },
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
  },
  methods: {
    closeModal() {
      this.$modal.hide('word-modal')
    }
  }
}
</script>

<style scoped>
.word-quiz {
  padding: 0.5rem;
}
.word-title {
  display: block;
  text-align: center;
  color: var(--secondary-color);
}
.word-title > p {
  display: inline-block;
}
.word-title > span {
  float: right;
}
.word-title::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 0.45rem;
  background: #eee;
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
}
.word-sample {
  border-radius: 10px;
  border: 1px solid #ddd;
  margin: 0 1.5rem 1.5rem 1.5rem;
  padding: 1.5rem;
  flex-grow: 4;
  flex-basis: 250px;
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
