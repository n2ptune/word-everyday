import Vue from 'vue'
import App from './App.vue'

// Plugins
import router from './router'
import breakpoint from '@/plugins/breakpoint'
import dayjs from '@/plugins/day'
import modal from 'vue-js-modal'
import baseURL from '@/plugins/base-url'
import './plugins/axios'
import store from './store'

// Styles
import '@/assets/style/tailwind.css'
import '@/assets/style/global.css'
import '@/assets/style/reset.css'
import '@/assets/style/responsive.css'

// Font-Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(baseURL)
Vue.use(breakpoint)
Vue.use(modal, { componentName: 'word-modal', dynamic: true })
Vue.prototype.$day = dayjs

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#root')
