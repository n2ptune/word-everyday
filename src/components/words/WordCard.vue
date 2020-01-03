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
          <a
            :href="
              `https://translate.google.com/?hl=ko#view=home&op=translate&sl=en&tl=ko&text=${word.word}`
            "
            target="_blank"
            >{{ word.translatedText }}</a
          >
        </div>
      </div>
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
.word-name a:hover {
  text-decoration-line: underline;
  text-decoration-style: dashed;
}
.word-translate a:hover {
  text-decoration-line: underline;
  text-decoration-style: dashed;
}
.word-name,
.word-translate {
  display: inline-block;
  margin: 0 0.5rem 0 0.5rem;
}
</style>
