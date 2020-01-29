// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { baseURL } from '@/plugins/base-url'

const state = {
  news: []
}

const getters = {
  getNews(state) {
    return state.news
  },
  getNewsLength(state) {
    let n = 0
    const reducer = (acc, cur) => (cur ? acc + 1 : 0)
    state.news.map(hn => {
      n += hn.titles.reduce(reducer, 0)
    })
    return n
  },
  isNews(state) {
    return new Boolean(state.news.length)
  }
}

const mutations = {
  setNews(state, reqNews) {
    state.news = reqNews
  }
}

const actions = {
  // eslint-disable-next-line no-unused-vars
  async getHackerNews({ commit, getters }) {
    if (!getters['isNews']) return

    /**
     * @get hacker news data from server
     */
    const { data: hn } = await axios.get('/hackernews', {
      baseURL
    })

    commit('setNews', hn)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
