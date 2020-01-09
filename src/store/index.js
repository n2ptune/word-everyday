import Vue from 'vue'
import Vuex from 'vuex'
import words from '@/store/modules/words'
import hn from '@/store/modules/hn'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    words,
    hn
  },
  strict: debug
})
