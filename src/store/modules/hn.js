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
  }
}

const mutations = {
  setNews(state, reqNews) {
    state.news = reqNews
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
