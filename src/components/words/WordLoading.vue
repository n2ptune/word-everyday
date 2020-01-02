<template>
  <div class="word-loading">
    <div class="loading-header">
      <p class="title">
        <font-awesome-icon :icon="icon.current" :style="{ color: 'gray' }" />
        서버에서 데이터를 불러오는 중...
      </p>
    </div>
    <content-loader
      :width="300"
      :height="240"
      :speed="2"
      primaryColor="#ddd"
      secondaryColor="rgba(90, 179, 17, 0.2)"
    >
      <!-- 1 -->
      <rect x="0" y="0" width="40" height="40" rx="3" ry="3" />
      <rect x="50" y="0" width="80" height="10" rx="3" ry="3" />
      <rect x="140" y="0" width="160" height="10" rx="3" ry="3" />
      <rect x="50" y="15" width="130" height="10" rx="3" ry="3" />
      <rect x="190" y="15" width="110" height="10" rx="3" ry="3" />
      <rect x="50" y="30" width="110" height="10" rx="3" ry="3" />
      <rect x="170" y="30" width="130" height="10" rx="3" ry="3" />
      <!-- 2 -->
      <rect x="0" y="50" width="40" height="40" rx="3" ry="3" />
      <rect x="50" y="50" width="80" height="10" rx="3" ry="3" />
      <rect x="140" y="50" width="160" height="10" rx="3" ry="3" />
      <rect x="50" y="65" width="130" height="10" rx="3" ry="3" />
      <rect x="190" y="65" width="110" height="10" rx="3" ry="3" />
      <rect x="50" y="80" width="110" height="10" rx="3" ry="3" />
      <rect x="170" y="80" width="130" height="10" rx="3" ry="3" />
      <!-- 3 -->
      <rect x="0" y="100" width="40" height="40" rx="3" ry="3" />
      <rect x="50" y="100" width="80" height="10" rx="3" ry="3" />
      <rect x="140" y="100" width="160" height="10" rx="3" ry="3" />
      <rect x="50" y="115" width="130" height="10" rx="3" ry="3" />
      <rect x="190" y="115" width="110" height="10" rx="3" ry="3" />
      <rect x="50" y="130" width="110" height="10" rx="3" ry="3" />
      <rect x="170" y="130" width="130" height="10" rx="3" ry="3" />
      <!-- 4 -->
      <rect x="0" y="150" width="40" height="40" rx="3" ry="3" />
      <rect x="50" y="150" width="80" height="10" rx="3" ry="3" />
      <rect x="140" y="150" width="160" height="10" rx="3" ry="3" />
      <rect x="50" y="165" width="130" height="10" rx="3" ry="3" />
      <rect x="190" y="165" width="110" height="10" rx="3" ry="3" />
      <rect x="50" y="180" width="110" height="10" rx="3" ry="3" />
      <rect x="170" y="180" width="130" height="10" rx="3" ry="3" />
      <!-- 5 -->
      <rect x="0" y="200" width="40" height="40" rx="3" ry="3" />
      <rect x="50" y="200" width="80" height="10" rx="3" ry="3" />
      <rect x="140" y="200" width="160" height="10" rx="3" ry="3" />
      <rect x="50" y="215" width="130" height="10" rx="3" ry="3" />
      <rect x="190" y="215" width="110" height="10" rx="3" ry="3" />
      <rect x="50" y="230" width="110" height="10" rx="3" ry="3" />
      <rect x="170" y="230" width="130" height="10" rx="3" ry="3" />
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  data() {
    return {
      icons: [
        'database',
        'server',
        'people-carry',
        'wifi',
        'network-wired',
        'file-word',
        'globe-asia',
        'clock'
      ],
      icon: {
        current: 'spinner',
        interval: null
      }
    }
  },
  components: {
    ContentLoader
  },
  mounted() {
    this.icon.interval = setInterval(
      function() {
        this.icon.current = this.icons[
          Math.floor(Math.random() * this.icons.length)
        ]
      }.bind(this),
      750
    )
  },
  beforeDestroy() {
    clearInterval(this.icon.interval)
  }
}
</script>

<style scoped>
.loading-header .title {
  font-size: 0.95rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.46);
  margin-bottom: 1rem;
}
</style>
