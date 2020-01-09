const state = {
  words: [],
  status: null
}

const getters = {
  getWords(state) {
    return state.words
  },
  getWordsStatus(state) {
    return state.status
  },
  getFilterDummyWord: state => word => {
    return state.words[
      state.words.findIndex(item => item.word === word)
    ].hasOwnProperty('dummy')
  },
  getWordObjWithName: state => word => {
    return state.words[state.words.findIndex(item => item.word === word)].dummy
  }
}

const mutations = {
  setWords(state, reqWords) {
    state.words = reqWords
  },
  setStatus(state, { id, date }) {
    state.status = {
      id,
      date
    }
  },
  setDummyText(state, { dummy, word }) {
    const idx = state.words.findIndex(item => item.word === word)
    for (const dummyItem of dummy) {
      if (state.words[idx].hasOwnProperty('dummy')) {
        state.words[idx].dummy.push(dummyItem.text)
      } else {
        state.words[idx].dummy = []
        state.words[idx].dummy.push(dummyItem.text)
      }
    }
    state.words[idx].dummy.push(state.words[idx].translatedText)
    state.words[idx].dummy.sort(() => 0.5 - Math.random())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
