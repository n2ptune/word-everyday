import Vue from 'vue'
import App from './App.vue'

// Plugins
import router from './router'
import breakpoint from '@/plugins/breakpoint'
import './plugins/axios'

// Styles
import '@/assets/style/global.css'
import '@/assets/style/reset.css'
import '@/assets/style/responsive.css'

Vue.config.productionTip = false
Vue.use(breakpoint)

new Vue({
  render: h => h(App),
  router
}).$mount('#root')
