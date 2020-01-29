<template>
  <div class="text-center">
    <slot name="header">
      <div class="title mb-6">
        <font-awesome-icon
          icon="newspaper"
          class="text-gray-700 text-2xl mr-2"
        />
        <div class="text-gray-700 font-bold text-xl">
          해커 뉴스 제목 번역
        </div>
        <div class="text-sm text-gray-600 mx-auto">
          해커 뉴스에 등록 된 TOP 500 게시글 제목을 번역합니다.
          <br />
          TOP 500 게시글은 시간마다 바뀔 수 있습니다. 그에 따라 번역하는 갯수에
          차이가 있을 수 있습니다.
        </div>
      </div>
    </slot>
    <slot name="default"> </slot>
  </div>
</template>

<style lang="postcss" scoped>
.title > *:not(:last-child) {
  @apply inline-block;
}
</style>
