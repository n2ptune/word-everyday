<template>
  <div class="card-container">
    <div class="card-title">
      <font-awesome-icon
        icon="info-circle"
        :style="{ color: 'green', marginRight: '5px' }"
      />
      최종 업데이트 : {{ $day(info.date).format('LLL') }}
    </div>
    <div class="card-wrapper">
      <div
        class="word-card"
        v-for="word in words"
        :key="word.word"
        @click="showModal(word)"
      >
        <div class="word-name">
          {{ word.word }}
        </div>
      </div>
    </div>
    <word-modal
      name="word-modal"
      @before-open="openModalHandler"
      @before-close="closeModalHandler"
      :adaptive="true"
      width="650px"
      height="auto"
      scrollable
    >
      <WordQuiz :content="modalContent" />
    </word-modal>
  </div>
</template>

<script>
export default {
  components: {
    WordQuiz: () => import('@/components/words/WordQuiz')
  },
  data() {
    return {
      modalContent: {}
    }
  },
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
  methods: {
    showModal(word) {
      this.$modal.show('word-modal', { word })
    },
    openModalHandler(event) {
      this.modalContent = event.params.word
    },
    closeModalHandler() {
      this.modalContent = {}
    }
  }
}
</script>

<style scoped>
.card-title {
  text-align: center;
  color: var(--secondary-color);
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
}
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 3rem;
}
.word-card {
  display: block;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  padding: 0.6rem;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
}
.word-card:hover {
  background-color: rgba(0, 0, 0, 0.11);
  cursor: pointer;
}
.word-name {
  font-weight: bold;
  display: inline-block;
  padding: 0 0.5rem 0 0.5rem;
}
</style>
