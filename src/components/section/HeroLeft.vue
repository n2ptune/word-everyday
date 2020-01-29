<template>
  <div class="hero h-full">
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
  z-index: 10;
  background-color: #efefef;
  box-shadow: 1rem 0 1rem 1rem rgba(0, 0, 0, 0.21);
}
.hero-content-title {
  font-weight: bold;
}
.hero-content-subtitle {
  color: rgba(0, 0, 0, 0.64);
}
@media screen and (max-width: 768px) {
  .hero {
    box-shadow: none;
  }
}
</style>
