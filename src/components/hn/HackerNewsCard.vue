<template>
  <div class="flex justify-center flex-col w-auto md:w-8/12 mx-auto">
    <slot name="default">
      <div
        class="my-5 rounded-lg bg-white py-6 px-12 shadow-lg list-wrapper"
        v-for="content in news"
        :key="content.word"
      >
        <div class="text-sm text-gray-700 mb-4">
          '{{ content.word }}'에 대한 검색결과 {{ content.titles.length }}개를
          번역했습니다.
        </div>
        <div
          v-for="translated in content.titles"
          :key="translated.title"
          class="translate"
        >
          <div class="text-gray-600 mb-2">
            {{ splitSentence(translated.title, content.word)[0] }}
            <span class="font-bold">{{
              splitSentence(translated.title, content.word)[1]
            }}</span>
            {{ splitSentence(translated.title, content.word)[2] }}
          </div>
          <div class="text-gray-800 font-bold text-sm">
            {{ translated.translatedTitle }}
          </div>
        </div>
        <!-- @TODO -->
        <div class="mt-6 footer flex justify-end">
          <button @click="showImproveTranslatingModal(content)">
            번역 개선하기
          </button>
        </div>
      </div>
      <word-modal
        name="word-modal"
        transition="nice-modal-fade"
        adaptive
        scrollable
        height="auto"
        :pivotY="0.2"
        @before-open="openModalHandler"
      >
        <ImproveTranslatingModal :content="modalContent" />
      </word-modal>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['news'],
  data() {
    return {
      modalContent: null
    }
  },
  components: {
    ImproveTranslatingModal: () =>
      import('@/components/hn/ImproveTranslatingModal')
  },
  methods: {
    splitSentence(sentence, word) {
      const splits = sentence.split(word)

      switch (splits.length) {
        case 0:
        case 1:
          return sentence
        case 2:
          return [splits[0], word, splits[1]]
      }
    },
    showImproveTranslatingModal(content) {
      this.$modal.show('word-modal', { content })
    },
    openModalHandler(event) {
      this.modalContent = event.params.content
    }
  }
}
</script>

<style lang="postcss" scoped>
.footer button {
  @apply py-2 px-3 rounded-full bg-gray-600 text-gray-100 text-sm mx-1;
}
.footer button:hover {
  @apply bg-gray-800;
}
.footer button:focus {
  @apply outline-none;
}
</style>
