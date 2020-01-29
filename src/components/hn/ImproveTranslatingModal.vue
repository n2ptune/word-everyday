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
        v-for="translatedContent in content.titles"
        :key="translatedContent.title"
      >
        <div class="text-green-600 font-bold">
          {{ translatedContent.title }}
        </div>
        <div class="text-gray-800 mt-2">
          <span class="font-bold">번역 된 문장 : </span>
          {{ translatedContent.translatedTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>
