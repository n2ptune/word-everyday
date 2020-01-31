<template>
  <div>
    <HackerNewsWrapper>
      <transition name="fade-content" mode="in-out">
        <div v-if="!news.length && !loading">
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
        <HackerNewsCard v-else-if="news.length && loading" :news="news" />
        <div v-else>
          <div class="text-gray-700 mt-8">
            오늘 단어에 알맞는 해커 뉴스 번역 내용이 없습니다.
          </div>
          <img
            src="@/assets/svg/not-found.svg"
            alt=""
            width="320"
            class="mx-auto mt-4"
            :style="{ filter: 'invert(0.75)' }"
          />
        </div>
      </transition>
    </HackerNewsWrapper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ContentLoader } from 'vue-content-loader'
import { theme } from '@@/tailwind.config.js'

export default {
  data() {
    return {
      loading: false
    }
  },
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
      news: 'hn/getNews',
      words: 'words/getWords'
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
    this.loading = true
  }
}
</script>
