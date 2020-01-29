<template>
  <div>
    <HackerNewsWrapper>
      <transition name="fade-content" mode="out-in">
        <div v-if="!news.length">
          <div class="mb-2 text-gray-700">
            번역 중...
          </div>
          <ContentLoader
            :width="200"
            :height="215"
            :primaryColor="primaryColor"
            :secondaryColor="secondaryColor"
          >
            <rect x="0" y="0" width="200" height="50" rx="3" ry="3" />
            <rect x="0" y="55" width="200" height="50" rx="3" ry="3" />
            <rect x="0" y="110" width="200" height="50" rx="3" ry="3" />
            <rect x="0" y="165" width="200" height="50" rx="3" ry="3" />
          </ContentLoader>
        </div>
        <HackerNewsCard v-else :news="news" />
      </transition>
    </HackerNewsWrapper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ContentLoader } from 'vue-content-loader'
import { theme } from '@@/tailwind.config.js'

export default {
  components: {
    HackerNewsWrapper: () => import('@/components/hn/HackerNewsWrapper'),
    HackerNewsCard: () => import('@/components/hn/HackerNewsCard'),
    ContentLoader
  },
  methods: {
    ...mapActions({
      getHackerNews: 'hn/getHackerNews'
    })
  },
  computed: {
    ...mapGetters({
      news: 'hn/getNews'
    }),
    primaryColor() {
      return theme.colors.gray['300']
    },
    secondaryColor() {
      return theme.colors.gray['400']
    }
  },
  async created() {
    await this.getHackerNews()
  }
}
</script>
