<template>
  <div class="h-full bg-white py-6 px-2 flex flex-wrap flex-col">
    <div class="text-center text-gray-700">
      '<span class="font-bold">{{ content.word }}</span
      >'에 대한 해커뉴스 번역 결과 개선
      <div class="text-gray-500 text-sm">
        문장 혹은 단어는 구글 번역 API에 의해 번역됩니다.
        <br />
        어색한 문장 혹은 단어를 개선해주시면 내용을 검토해서 반영하겠습니다.
      </div>
    </div>
    <div class="mt-5 text-center px-6">
      <div class="text-gray-800 font-bold">
        어떤 내용을 개선하시겠습니까?
      </div>
      <div
        class="mt-2"
        v-for="(translatedContent, idx) in content.titles"
        :key="translatedContent.title"
      >
        <div class="text-green-600 font-bold">
          {{ translatedContent.title }}
        </div>
        <div class="text-gray-800 mt-2">
          <span class="font-bold">번역 된 문장 : </span>
          {{ translatedContent.translatedTitle }}
        </div>
        <div class="mt-5">
          <textarea
            v-model="customTranslateText[idx].value"
            placeholder="번역하신 내용을 적어주세요."
            class="w-full bg-gray-200 rounded-lg focus:outline-none focus:bg-gray-300 p-2 text-sm"
          />
          <button
            class="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 focus:outline-none rounded-lg mt-2"
            @click="sendTranslateText(idx)"
          >
            번역한 내용 전송
            <font-awesome-icon
              icon="check"
              :class="sendStatus ? 'text-green-500' : ''"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data() {
    const result = []
    for (let i = 0; i < this.$props.content.titles.length; i++) {
      result.push({
        value: null
      })
    }
    return {
      customTranslateText: result,
      /**
       * @todo must change this status when has been sent data to server
       */
      sendStatus: false
    }
  },
  created() {
    for (let i = 0; i < this.content.titles.length; i++) {
      this.customTranslateText[i].value = null
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    sendTranslateText(idx) {
      /**
       * @todo send translated text of user to server
       * change @sendStatus when you send data successfully
       * @validate bound v-model data must be not null
       */
    }
  },
  beforeDestroy() {
    this.customTranslateText = []
  }
}
</script>
