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
      <div class="word-card" v-for="word in words" :key="word.word">
        <div class="word-name">
          <a
            :href="`https://en.dict.naver.com/#/search?query=${word.word}`"
            target="_blank"
            >{{ word.word }}</a
          >
        </div>
        <div class="word-translate">
          {{ word.translatedText }}
        </div>
      </div>
    </div>
    <div class="card-description">
      영어 단어를 클릭하면 <span>네이버 영어사전</span>으로 이동합니다.
    </div>
  </div>
</template>

<script>
export default {
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
  created() {
    // console.log(this.words)
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
  box-shadow: 0 0 7px 1px rgba(0, 25, 0, 0.15);
  border-radius: 5px;
  padding: 0.6rem;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
}
.word-name {
  font-weight: bold;
}
.word-name > a:hover {
  text-decoration-line: underline;
  text-decoration-style: dashed;
}
.word-name,
.word-translate {
  display: inline-block;
  margin: 0 0.5rem 0 0.5rem;
}
.card-description {
  display: block;
  text-align: center;
  color: var(--secondary-color);
  margin: 1rem 1.5rem 0 1.5rem;
}
.card-description > span {
  color: var(--primary-color);
  font-weight: bold;
}
</style>
