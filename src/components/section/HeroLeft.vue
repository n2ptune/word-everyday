<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-content-title">
        Word Everyday
      </div>
      <div class="hero-content-subtitle">
        매일 영어 단어 10개를 추천/번역 & 해커 뉴스 예문 번역
      </div>
      <div class="hero-content-body-left hero-content-body">
        <WordContent />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    WordContent: () => import('@/components/words/WordContent')
  }
}
</script>

<style scoped>
.hero {
  background-color: #efefef;
}
.hero-content-title {
  font-weight: bold;
}
.hero-content-subtitle {
  color: rgba(0, 0, 0, 0.64);
}
</style>
